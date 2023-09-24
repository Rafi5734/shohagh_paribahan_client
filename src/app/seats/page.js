"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Link from "next/link";
import SeatBooking from "@/components/SeatBooking/Index";

export default function Seats() {
  const [blocks, setBlocks] = useState(Array(30).fill(false));
  const [validated, setValidated] = useState(false);

  const toggleBlock = (index) => {
    const newBlocks = [...blocks];
    console.log(newBlocks);
    newBlocks[index] = !newBlocks[index];
    setBlocks(newBlocks);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="mt-5 pt-5">
      <SeatBooking></SeatBooking>
    </div>
  );
}
