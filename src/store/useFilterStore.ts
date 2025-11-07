import { FilterState } from "@/types/responseTypes";
import { create } from "zustand";

export const useFilterStore = create<FilterState & {
  activeFilterCount: number;
  updateActiveFilterCount: () => void;
}>((set, get) => ({
  dateRange: { startDate: null, endDate: null },
  transactionTypes: [],
  transactionStatuses: [],
  selectedTags: [],
  activeFilterCount: 0, // ✅ new state

  setDateRange: (range) => {
    set({ dateRange: range });
    get().updateActiveFilterCount();
  },
  setTransactionTypes: (types) => {
    set({ transactionTypes: types });
    get().updateActiveFilterCount();
  },
  setTransactionStatuses: (statuses) => {
    set({ transactionStatuses: statuses });
    get().updateActiveFilterCount();
  },
  setSelectedTags: (tags) => {
    set({ selectedTags: tags });
    get().updateActiveFilterCount();
  },

  clearFilters: () => {
    set({
      dateRange: { startDate: null, endDate: null },
      transactionTypes: [],
      transactionStatuses: [],
      selectedTags: [],
      activeFilterCount: 0, 
    });
  },

  updateActiveFilterCount: () => {
    const { dateRange, transactionTypes, transactionStatuses, selectedTags } = get();
    let count = 0;

    // count if date range is set
    if (dateRange.startDate || dateRange.endDate) count++;
    if (transactionTypes.length > 0) count++;
    if (transactionStatuses.length > 0) count++;
    if (selectedTags.length > 0) count++;

    set({ activeFilterCount: count });
  },
}));
