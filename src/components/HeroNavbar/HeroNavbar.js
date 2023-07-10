"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

export default function HeroNavbar() {
  return (
    <div>
      {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://shohagh.com/assets/img/logo-sp2.png"
              width="250"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link
                  href="/"
                  className="m-0 p-0 button_active_color text-decoration-none"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  href="/locations"
                  className=" m-0 p-0 text-decoration-none"
                >
                  Locations
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  href="/contactUs"
                  className=" m-0 p-0 text-decoration-none"
                >
                  Contact Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/faq" className="m-0 p-0 text-decoration-none">
                  FAQ
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </div>
  );
}
