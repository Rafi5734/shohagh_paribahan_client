"use client";
import React from "react";
import AllTickets from "../../../components/AllTickets/index";
import { useGetAllTicketsQuery } from "@/api/AllTickets";

const AllTicketsSSR = () => {
  const { data } = useGetAllTicketsQuery();

  console.log(data);
  return (
    <div className="mt-5 pt-5">
      <AllTickets></AllTickets>
    </div>
  );
};

export default AllTicketsSSR;
