// Home.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { useFilterStore } from "@/store/useFilterStore";
import * as api from "@/services/api";
import Home from "./page";

jest.mock("@/services/api");
jest.mock("@/component/Chart/ChartComponent", () => {
  const MockChart = () => <div>ChartComponent</div>;
  MockChart.displayName = "ChartComponent";
  return MockChart;
});
jest.mock("@/component/Table/TableItems", () => {
  const MockTableItems: React.FC<{ data?: { type?: string } }> = ({ data }) => {
    return <div>TableItem {data?.type}</div>;
  };
  MockTableItems.displayName = "TableItems";
  return MockTableItems;
});
jest.mock("@/component/Loader/Loader", () => {
  const MockLoader = () => <div>Loading...</div>;
  MockLoader.displayName = "Loader";
  return MockLoader;
});
jest.mock("@/component/Header", () => {
  const MockHeader = () => <div>Header</div>;
  MockHeader.displayName = "Header";
  return MockHeader;
});
jest.mock("@/component/Wallet/WalletTab", () => {
  const MockWalletTab: React.FC = () => <div>WalletTab</div>;
  MockWalletTab.displayName = "WalletTab";
  return MockWalletTab;
});
jest.mock("@/component/FloatingSideBar", () => {
  const MockFloatingSideBar: React.FC = () => <div>FloatingSideBar</div>;
  MockFloatingSideBar.displayName = "FloatingSideBar";
  return MockFloatingSideBar;
});
jest.mock("@/component/Filter/Filter", () => {
  const MockFilter: React.FC<{ setFilterActive?: (active: boolean) => void }> = ({ setFilterActive }) => {
    return (
      <div>
        FilterPanel
        <button onClick={() => setFilterActive?.(false)}>Close Filter</button>
      </div>
    );
  };
  MockFilter.displayName = "Filter";
  return MockFilter;
});

beforeEach(() => {
  useFilterStore.setState({
    dateRange: { startDate: null, endDate: null },
    transactionTypes: [],
    transactionStatuses: [],
    selectedTags: [],
    activeFilterCount: 0,
  });

  (api.useGetUserTransactionsQuery as jest.Mock).mockReturnValue({
    data: [
      { id: 1, type: "deposit", amount: 100 },
      { id: 2, type: "withdrawal", amount: 50 },
    ],
    isLoading: false,
  });

  (api.useGetUserWalletQuery as jest.Mock).mockReturnValue({
    data: { balance: 500 },
    isLoading: false,
  });
});

test("renders wallet balance and transactions", () => {
  render(<Home />);
  expect(screen.getByText(/USD 500/)).toBeInTheDocument();
  expect(screen.getByText(/2 Transactions/)).toBeInTheDocument();
  expect(screen.getByText(/deposit/i)).toBeInTheDocument();
  expect(screen.getByText(/withdrawal/i)).toBeInTheDocument();
  expect(screen.getByText(/Header/)).toBeInTheDocument();
  expect(screen.getByText(/FloatingSideBar/)).toBeInTheDocument();
});

test("opens and closes filter panel", async () => {
  render(<Home />);
  const filterButton = screen.getByText(/Filter/i);
  fireEvent.click(filterButton);
  expect(screen.getByText(/FilterPanel/)).toBeInTheDocument();

  const closeButton = screen.getByText(/Close Filter/i);
  fireEvent.click(closeButton);

  await waitFor(() => {
    expect(screen.queryByText(/FilterPanel/)).not.toBeInTheDocument();
  });
});

test("displays active filter count badge", () => {
  useFilterStore.setState({ activeFilterCount: 3 });
  render(<Home />);
  expect(screen.getByText("3")).toBeInTheDocument();
});

test("shows loader when transactions are loading", () => {
  (api.useGetUserTransactionsQuery as jest.Mock).mockReturnValue({
    data: null,
    isLoading: true,
  });
  render(<Home />);
  expect(screen.getAllByText(/Loading.../i)[0]).toBeInTheDocument();
});

