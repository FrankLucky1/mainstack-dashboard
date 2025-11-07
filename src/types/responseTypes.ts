export interface TransactionMetadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  product_name: string;
}

export interface Transaction {
  amount: number;
  date: string;
  metadata: TransactionMetadata;
  payment_reference: string;
  status: "successful" | "failed" | "pending" | string; 
  type: "deposit" | "withdrawal" | string; 
}

export interface UserDetailsType {first_name: string, last_name: string, email: string}

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface FilterState {
  dateRange: DateRange;
  transactionTypes: string[];
  transactionStatuses: string[];
  selectedTags: string[];
  setDateRange: (range: DateRange) => void;
  setTransactionTypes: (types: string[]) => void;
  setTransactionStatuses: (statuses: string[]) => void;
  setSelectedTags: (tags: string[]) => void;
  clearFilters: () => void;
}

export interface DateType  {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
};