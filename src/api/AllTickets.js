import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allTickets = createApi({
  reducerPath: "all_tickets",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8008",
  }),
  tagTypes: ["all_tickets"],
  endpoints: (builder) => ({
    getAllTickets: builder.query({
      query: () => `/admin/config`,
      providesTags: ["all_tickets"],
    }),
  }),
});

export const { useGetAllTicketsQuery } = allTickets;
