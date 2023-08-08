import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allTickets = createApi({
  reducerPath: "all_tickets",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["all_tickets"],
  endpoints: (builder) => ({
    getAllTickets: builder.query({
      query: () => `todos`,
      providesTags: ["all_tickets"],
    }),
  }),
});

export const { useGetAllTicketsQuery } = allTickets;
