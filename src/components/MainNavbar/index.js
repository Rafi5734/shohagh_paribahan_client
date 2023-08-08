import React from "react";
import HeroNavbar from "../HeroNavbar/HeroNavbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNavbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div class="container-fluid">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light main_navbar">
          <div class="container">
            <img
              src="https://shohagh.com/assets/img/logo-sp2.png"
              width="250"
              alt="logo"
            />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item me-3">
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? "m-0 p-0 button_active_color text-decoration-none border-bottom border-danger"
                        : "m-0 p-0 text-decoration-none"
                    }
                  >
                    Home
                  </Link>
                </li>
                {/* <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle mt-0 pt-0 me-3 text-primary"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Account
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link class="dropdown-item" href="/update_profile">
                          Edit Profile
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="/change_password">
                          Change Profile
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                <li class="nav-item me-3">
                  <Link
                    href="/locations"
                    className={
                      pathname === "/locations"
                        ? "m-0 p-0 button_active_color text-decoration-none border-bottom border-danger"
                        : "m-0 p-0 text-decoration-none"
                    }
                  >
                    Locations
                  </Link>
                </li>
                <li class="nav-item me-3">
                  <Link
                    href="/contactUs"
                    className={
                      pathname === "/contactUs"
                        ? "m-0 p-0 button_active_color text-decoration-none border-bottom border-danger"
                        : "m-0 p-0 text-decoration-none"
                    }
                  >
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item me-3">
                  <Link
                    href="/faq"
                    className={
                      pathname === "/faq"
                        ? "m-0 p-0 button_active_color text-decoration-none border-bottom border-danger"
                        : "m-0 p-0 text-decoration-none"
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
