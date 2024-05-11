"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MainNavbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light main_navbar">
          <div className="container ps-0">
            <Image
              src="https://shohagh.com/static/media/logo.ff834e7c5592e2a0f5d02eb84356b2fd.svg"
              width={400}
              height={50}
              alt="logo"
            />
            <button
              className="navbar-toggler ms-3 mb-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse ms-3"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-3 mt-2">
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? "m-0 p-0 button_active_color text-decoration-none border-bottom border-danger fw-bold"
                        : "m-0 p-0 text-decoration-none text-dark"
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item me-3 mt-2">
                  <Link
                    href="/locations"
                    className={
                      pathname === "/locations"
                        ? "m-0 p-0 button_active_color text-decoration-none border-bottom border-danger fw-bold"
                        : "m-0 p-0 text-decoration-none text-dark"
                    }
                  >
                    Locations
                  </Link>
                </li>
                <li className="nav-item me-3 mt-2">
                  <Link
                    href="/dashboard"
                    className={
                      pathname === "/dashboard"
                        ? "m-0 p-0 button_active_color text-decoration-none border-bottom border-danger fw-bold"
                        : "m-0 p-0 text-decoration-none text-dark"
                    }
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item me-3 mt-2">
                  <Link
                    href="/contactUs"
                    className={
                      pathname === "/contactUs"
                        ? "m-0 p-0 button_active_color text-decoration-none border-bottom border-danger fw-bold"
                        : "m-0 p-0 text-decoration-none text-dark"
                    }
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item me-3 mt-2">
                  <Link
                    href="/faq"
                    className={
                      pathname === "/faq"
                        ? "m-0 p-0 button_active_color text-decoration-none border-bottom border-danger fw-bold"
                        : "m-0 p-0 text-decoration-none text-dark"
                    }
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNavbar;
