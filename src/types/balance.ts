// Balance type and helper utilities

export interface Balance {
  id: string;
  account: string;
  amount: number; // stored as number (currency smallest unit is optional)
  datetime: string; // ISO 8601 string
  notes?: string;
}

/** Generate a reasonably unique id. Uses crypto.randomUUID when available, falls back to timestamp+random. */
export function generateId(): string {
  try {
    // @ts-ignore - lib.dom crypto may be available in some runtimes
    if (typeof crypto !== 'undefined' && typeof (crypto as any).randomUUID === 'function') {
      return (crypto as any).randomUUID();
    }
  } catch (e) {
    // ignore and fallback
  }
  return `b_${Date.now().toString(36)}_${Math.floor(Math.random() * 1e9).toString(36)}`;
}

/** Create a Balance from partial input, applying defaults. */
export function createBalance(data: Partial<Balance>): Balance {
  const nowIso = new Date().toISOString();
  return {
    id: data.id ?? generateId(),
    account: (data.account ?? 'Unnamed') as string,
    amount: typeof data.amount === 'number' && !Number.isNaN(data.amount) ? data.amount : 0,
    datetime: data.datetime ?? nowIso,
    notes: data.notes,
  };
}

/** Serialize array of balances to JSON string */
export function serializeBalances(balances: Balance[]): string {
  return JSON.stringify(balances);
}

/** Parse balances JSON, with defensive checks. Returns empty array on malformed input. */
export function parseBalances(json: string | undefined | null): Balance[] {
  if (!json) return [];
  try {
    const parsed = JSON.parse(json);
    if (!Array.isArray(parsed)) return [];
    // lightweight validation
    return parsed.map((item) => ({
      id: String(item.id ?? generateId()),
      account: String(item.account ?? 'Unnamed'),
      amount: Number(item.amount ?? 0),
      datetime: String(item.datetime ?? new Date().toISOString()),
      notes: item.notes !== undefined ? String(item.notes) : undefined,
    }));
  } catch (e) {
    return [];
  }
}

// Note: no default export because `Balance` is a TypeScript type/interface.
