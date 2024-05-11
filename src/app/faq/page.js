"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
  return (
    <div className="mt-5 pt-5 mb-5">
      <Container className="mt-4">
        <h3 className="border-bottom border-danger">FAQ</h3>
        <div>
          <p className="fs-3">Online Booking Related</p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                1. How to buy a ticket on shohag.com
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  You can purchase the tickets online which is a very simple
                  four-step process. After purchasing your ticket, you will
                  receive an email and SMS.
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                2. Do I have to pay extra when compared to buying the tickets
                offline?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  The price of online ticket is the same as price of a counter
                  ticket of the same description. However, bank processing
                  fee/bank charge will be added to the base fare in case of
                  online purchase.
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                3. How does your boarding process work?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  Please arrive at the departure point at least 15 minutes prior
                  to departure. Please show your SMS/Printed Email at the
                  counter. You will be issued the boarding card/actual ticket
                  there.
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                4. I’ve lost my ticket reservation confirmation printout What do
                I do now?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  A copy of the ticket reservation confirmation would have been
                  sent to you by email when you purchased the online ticket.
                  Please take a printout of that mail and produce it at the time
                  of boarding. The boarding card/actual ticket will be issued
                  there. If you have not received notice of reservation
                  confirmation to the email you provided, you can take a
                  printout from shohagh.com website by logging into your account
                  (Account
                  {"->"} Reservation History {"->"} Download.)
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                5. I have not received the tickets to my email id, what do I do?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  If you did not receive an email regarding booking/reservation
                  confirmation, there can be two reasons: you have either
                  entered an incorrect email address or the email address is not
                  verified. In such a situation, you are requested to call our
                  customer support at 09606444777.
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                6. I did not receive my SMS Ticket confirmation on mobile. Can
                you re-send it?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  Yes. Please contact our 24/7 customer support at 09606444777
                  and we will be able to re-send you the SMS ticket confirmation
                  with PNR details.
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="mt-4">
          <p className="fs-3">Cancellation Related</p>
          <Accordion>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                1. Can I cancel my bus ticket?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  Yes. The tickets booked through shohagh.com can be cancelled
                  from online before the cutoff time. For cancelling the
                  tickets, you have to submit cancel request on the website at
                  least 24 hours before the departure time. Request for
                  cancellation anytime after 24 hours prior to departure time
                  would be refused. (Note : Tickets purchased of trips marked
                  Ticket Not Cancelable are not cancelable at all from online.
                  During Eid schedule, No tickets are eligible for cancellation.
                  Customers are eligible for refund ONLY if the trip is omitted
                  and we cannot provide an alternative arrangement.)
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                2. How can I cancel my ticket, if I need to?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  To cancel your ticket, login to your account on shohagh.com –
                  go to {"Cancel"} Tab and submit your PNR (You will find a
                  cancel button on the the bottom of ticket details if cancel is
                  eligible). Check the refund terms before cancellation.
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                3. Can I partially cancel my ticket?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>No</span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="mt-4">
          <p className="fs-3">Payments Related</p>
          <Accordion>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                1. What Payment types do you accept?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  We accept Internet banking, payment via Credit Cards, Debit
                  Cards (Visa, MasterCard, American Express , DBBL Nexus etc.)
                  Bkash, Rocket, Upay and iPay etc.
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                2. Can I pay for someone else?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  Yes, you can pay/book bus tickets for others. It is not
                  necessary that the payee has to travel.
                </span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header>
                3. Home Delivery / Cash on Delivery of tickets available?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>No. We do not provide such facility as on date.</span>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
              <Accordion.Header>
                4. How fast should I complete the online payment?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  Payment for any booking, after selecting the seats has to be
                  completed within 10 minutes. If you don{"'"}t complete the
                  payment within 10 minutes from selection of your seats, you
                  will not be able to complete the booking process in that
                  session. You will then have to start afresh.
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="mt-4">
          <p className="fs-3">Refunds Related</p>
          <Accordion>
            <Accordion.Item eventKey="13">
              <Accordion.Header>
                1. I have cancelled my booking and when can I get the refund
                amount? Will the refund be full amount?
              </Accordion.Header>
              <Accordion.Body>
                <span className="fw-bold">Ans: </span>
                <span>
                  Generally all refunds are processed automatically at the time
                  of cancelation. The payment is refunded to the account from
                  which the amount was paid. In case of third party payments (
                  for instance, payment from Bkash agent or payment from someone
                  else’s account, please note that the fund would be remitted
                  back to the third party account and not the account of the
                  holder of the ticket. Depending on the account, it may take
                  3-14 business days for the refunded amount to be credited to
                  the account. The amount charged for online ticket purchase
                  comprises of the price of the ticket and the
                  bank/institutional charge. In case of refund, only the price
                  of the ticket shall be refunded to the account from which the
                  payment was made. In the event a trip is cancelled by Shohagh,
                  bank charges/institutional charges will also be refunded.
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}
