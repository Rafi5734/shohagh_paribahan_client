import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Pagination from "react-bootstrap/Pagination";
import UpdateTicketDetails from "./UpdateTicketDetails";
import { useGetAllTicketsQuery } from "@/api/AllTickets";
import Placeholder from "react-bootstrap/Placeholder";
import { AiOutlineSearch } from "react-icons/ai";
import AdminViewTicketDetails from "./AdminViewTicketDetails/AdminViewTicketDetails";

const Index = () => {
  const { data, isLoading, isError } = useGetAllTicketsQuery();
  const [searchData, setSearchData] = useState("");
  const [mainData, setMainData] = useState();

  const handleSearch = () => {
    // console.log("onchange", searchData);

    const filterTicket = data.filter(
      (item) => item.from.toLowerCase() === searchData.toLowerCase()
    );
    if (filterTicket.length > 0) {
      setMainData(filterTicket);
    } else {
      setMainData(data);
    }
    // console.log("filter", filterTicket);
    setSearchData("");
  };

  useEffect(() => {
    setMainData(data);
  }, [data]);

  // console.log(data);
  return (
    <div>
      <h3 className="mt-3 text-center">All tickets</h3>
      <hr />
      <div className="w-50 ps-5">
        <Form.Label>Search Ticket</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Ex: Dhaka"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="search"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <Button variant="outline-primary" onClick={handleSearch}>
            <AiOutlineSearch />
          </Button>{" "}
        </InputGroup>
      </div>
      <div className="ps-2 pe-2 overflow-auto">
        {isLoading ? (
          <>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
          </>
        ) : (
          <>
            <Table striped bordered hover className="overflow-auto">
              <thead>
                <tr>
                  <th>#</th>
                  <th>From-to</th>
                  <th>Date</th>
                  <th>Boarding time & place</th>
                  <th>Destination place</th>
                  <th>Fare</th>
                  <th>Seats</th>
                  <th>Coach type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mainData?.map((j, index) => (
                  <>
                    <tr key={index}>
                      <td>{++index}</td>
                      <td>
                        <div>
                          <p className="m-0">{j?.from}-</p>
                          <p className="m-0">{j?.to}</p>
                        </div>
                      </td>
                      <td>{j?.journeyDate}</td>
                      <td>
                        <div>
                          <p className="m-0">{j?.boardingPlace}-</p>
                          <p className="m-0">{j?.boardingTime}</p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p className="m-0">{j?.destinationPlace}</p>
                        </div>
                      </td>
                      <td>{j?.fare}</td>
                      <td>{j?.seats}</td>
                      <td>{j?.coachType}</td>
                      <td>
                        <div className="d-flex">
                          <UpdateTicketDetails id={j?._id} />
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-disabled">
                                Delete ticket
                              </Tooltip>
                            }
                          >
                            <span className="d-inline-block">
                              <Button variant="danger" className="me-1">
                                <i
                                  class="fa-solid fa-trash-can"
                                  style={{ color: "white" }}
                                ></i>
                              </Button>{" "}
                            </span>
                          </OverlayTrigger>
                          <AdminViewTicketDetails id={j?._id} />
                          {/*  */}
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
          </>
        )}

        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
};

export default Index;
