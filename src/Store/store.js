import { configureStore } from "@reduxjs/toolkit";
import { allTickets } from "@/api/AllTickets";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [allTickets.reducerPath]: allTickets.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(allTickets.middleware),
});
setupListeners(store.dispatch);
