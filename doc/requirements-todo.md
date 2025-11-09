# Finance Overview — Implementation TODOs

This file contains a concise, actionable todo list derived from `doc/requirements.md` so you can track implementation progress in the repository.

## Overview

Each top-level task below maps to the requirements in the project's requirements document. Tasks include suggested files, acceptance criteria, and short implementation notes.

---

## TODO Checklist

- [ ] Balance entry form (UI)
  - Purpose: Create a reusable balance entry component that lets users add balances per account.
  - Fields: account name (text/select), balance amount (number/currency), date/time (defaults to now).
  - Files: `src/components/BalanceForm.tsx`, update `src/App.tsx` to include it.
  - Validation: non-empty account, numeric amount (can be negative), date is valid.
  - Acceptance: user can submit a form and the new entry is handed to the app state and persisted to storage.

- [ ] Balance model & types
  - Purpose: Define data shapes and helpers for balance entries.
  - Files: `src/types/balance.ts` (export `Balance` interface, generateId(), parse/serialize helpers).
  - Acceptance: components and hooks import/use the `Balance` type and TypeScript compiles without errors.

- [ ] Local storage persistence utilities
  - Purpose: Implement localStorage helpers to save/load balances for the MVP.
  - Files: `src/utils/storage.ts` (getBalances, saveBalances, exportJSON, importJSON).
  - Notes: handle malformed data gracefully and default to an empty list.
  - Acceptance: balances persist across page reloads; export/import works for JSON files.

- [ ] State management (useReducer + Context)
  - Purpose: Set up application-level state for balances.
  - Files: `src/state/BalancesContext.tsx` or `src/hooks/useBalances.ts`.
  - Actions: ADD_BALANCE, UPDATE_BALANCE, DELETE_BALANCE, LOAD_BALANCES.
  - Acceptance: components can dispatch actions and read balances via context/hook.

- [ ] History view (list & filtering)
  - Purpose: Build a chronological history list that displays entered balances and allows filtering/grouping by account.
  - Files: `src/components/HistoryList.tsx`, `src/components/HistoryItem.tsx`.
  - Acceptance: user sees account, date/time, amount; filters update the list without reload.

- [ ] Simple data visualization (Recharts)
  - Purpose: Add a basic line chart to visualize balance over time per account using Recharts.
  - Files: `src/components/BalanceChart.tsx`.
  - Acceptance: chart renders with sample data; add `recharts` to `package.json` dependencies.

- [ ] UI library & theming (MUI)
  - Purpose: Install and integrate Material UI for consistent components and theming.
  - Files: `src/theme/muiTheme.tsx`, wrap app with MUI `ThemeProvider`.
  - Acceptance: basic MUI components used in forms and lists; theme applied site-wide.

- [ ] Styling & responsive layout (Tailwind)
  - Purpose: Add TailwindCSS and create responsive layout styles for mobile and desktop.
  - Files: project config (tailwind/postcss) and use classes in `App.css` / components.
  - Acceptance: layout adapts for small and large screens; validated in dev server.

- [ ] Export / Import backup (CSV / JSON)
  - Purpose: Provide import/export functionality for user data backups.
  - Files: `src/utils/export.ts`, UI in `src/components/ImportExport.tsx` or `src/components/Settings.tsx`.
  - Acceptance: user can export balances as JSON/CSV and import JSON backup to replace or merge data (with confirmation).

- [ ] Income & expense recording (future)
  - Purpose: Extend the model to support income/expense transactions with categories and recurring flags.
  - Files: `src/types/transaction.ts`, additional UI forms/list views.
  - Acceptance: transaction type exists and can be recorded (Phase 2+).

- [ ] Customization options (account colors/icons, currency)
  - Purpose: Allow users to assign colors/icons to accounts and set default currency.
  - Files: `src/components/AccountSettings.tsx`, persist preferences to localStorage.
  - Acceptance: accounts show chosen colors/icons; currency selection affects formatting.

- [ ] Cloud sync & auth (future)
  - Purpose: Plan integration with a backend (Firebase / Supabase) for sync and authentication.
  - Files: `src/services/syncService.ts` (abstraction), design doc under `doc/` if needed.
  - Acceptance: design documented and a small sync prototype planned for Phase 4.

---

## Notes

- These todos mirror the MVP and roadmap described in `doc/requirements.md` and are intentionally scoped to be implementable one-by-one.
- If you'd like, I can open pull requests for a selected task, generate starter files, or convert these lines to GitHub issues.

---

Last updated: 2025-11-09
