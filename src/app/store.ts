import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api'; // we’ll create this next

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});