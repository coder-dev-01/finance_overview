# Finance Overview App — Requirements

## Overview
A **React-based finance tracking application** that allows users to record, view, and visualize their financial balances over time.  
The goal of the MVP is to provide a simple interface for inputting and tracking balance data across multiple accounts (e.g., giro, wallet, etc.), and later expand to include personalization and automated income tracking.

---

## MVP — Minimum Viable Product

### 1. Core Features

#### Balance Entry
- Users can manually enter balances for different accounts:
  - Examples: Giro, Wallet, Savings, Crypto, etc.
- Each entry should include:
  - Account type or name
  - Balance amount
  - Date/time of entry (default: current date/time)
- Data is stored locally (e.g., in a file locally) in the MVP.

#### History View
- Show a chronological list of all entered balances.
- Each record should display:
  - Account name  
  - Date/time of entry  
  - Balance value
- Option to filter or group entries by account.

#### Data Visualization
- Provide simple visualizations to track changes over time.
- NOT part of this MVP: Graph examples:
  - Line chart of balance over time (per account)
  - Combined overview of all accounts

### 2. UI/UX Requirements
- Clean and minimalistic layout.
- Responsive design for desktop and mobile.
- Use a React UI library such as:
  - [Material UI](https://mui.com)
- Note since not part of this MVP: Charting with a lightweight library:
  - e.g., [Recharts](https://recharts.org)

### 3. Technical Requirements
- **Frontend:** React (Vite or Create React App)
- **State Management:** useState / useReducer (no backend initially)
- **Storage:** LocalStorage (for MVP)
- **Charts:** Recharts (for simplicity)
- **Styling:** TailwindCSS (recommended)

---

## Future Features

### 1. Income and Expense Tracking
- Add ability to record fixed income and recurring transactions.
- Set categories (e.g., salary, rent, groceries).

### 2. Customization Options
- Users can:
  - Assign colors or icons to each account.
  - Choose preferred chart themes.
  - Configure default currency.

### 3. Data Persistence & Sync
- Integrate backend (e.g., Firebase or Supabase).
- User authentication and cloud sync across devices.

### 4. Advanced Analytics
- Monthly/weekly summaries.
- Expense vs. income insights.
- Goal tracking (e.g., savings targets).

### 5. Import/Export
- Export data as `.csv` or `.json`.
- Import previous backups.

---

## Potential Tech Stack Summary

| Category           | Technology        | Notes |
|--------------------|------------------|-------|
| Frontend Framework | React            | Main UI framework |
| UI Components      | ShadCN / MUI     | Consistent design |
| Styling            | TailwindCSS      | Utility-first styling |
| Charts             | Recharts         | Lightweight and easy to integrate |
| Storage (MVP)      | LocalStorage     | No backend required |
| Backend (Future)   | Firebase / Supabase | Cloud sync & auth |
| Build Tool         | Vite             | Fast development environment |

---

## Development Roadmap

| Phase | Goal | Key Deliverables |
|-------|------|------------------|
| **Phase 1 (MVP)** | Enter/view balances | Balance input form, list view, chart visualization |
| **Phase 2** | Add customization | Color themes, account colors |
| **Phase 3** | Add recurring income | Fixed income setup, summaries |
| **Phase 4** | Cloud & user accounts | Authentication, backend integration |

---
