"use client";

import HeadLogo from "@/public/HeadLogo.svg";
import MenuIcon from "@/public/MenuIcon.svg";
import HoneysucklesIcon from "@/public/HoneysucklesIcon.svg";
import { useRouter, usePathname } from "next/navigation";
import styled from "styled-components";
import { useMedia } from "@/app/hooks/useMedia";
import { useState } from "react";

const WebNav = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  width: 100%;

  img {
    max-height: 85px;
    max-width: 315px;
    height: auto;
    width: 20%;
    cursor: pointer;
  }

  .items {
    display: flex;
    gap: 38px;
    font-size: 1.5rem;
    color: #000;

    p {
      border-bottom: 2px solid transparent;
      cursor: pointer;
    }

    p:hover {
      border-color: #000;
      transition: border-color 0.3s ease;
    }
  }

  @media (max-width: 1000px) {
    .items {
      gap: 30px;
      font-size: 1rem;
    }
  }
`;

const MobileNav = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 1;

  .main-container {
    background-color: #f5f5f5;
    width: 100%;
    position: relative;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.4));

    .menu {
      height: 35px;
      width: 35px;
    }

    .mobile-logo {
      height: 45px;
      width: 45px;
    }
  }

  .navigation {
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #002E2C;
    display: flex;
    gap: 30px;
    padding: 20px;
    font-size: 1.25rem;
    flex-direction: column;
    position: absolute;
    height: fit-content;
    font-weight: 500;
    color: #fff;

    p.selected {
      color: #F66363;
    }
`;

export default function HeadNav() {
  const router = useRouter();
  const pathname = usePathname();
  const max768 = useMedia("(max-width: 768px");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleRoute = (url: string, e: any) => {
    e.preventDefault();
    router.push(url);
  };

  return !max768 ? (
    <WebNav>
      <img
        src={HeadLogo.src}
        onClick={(e) => handleRoute("/", e)}
        alt="honeysuckles-logo"
      />
      <div className="items roboto">
        <p onClick={(e) => handleRoute("/about", e)}>About</p>
        <p onClick={(e) => handleRoute("/weddings", e)}>Weddings</p>
        <p onClick={(e) => handleRoute("/everyday", e)}>Everyday</p>
        <p onClick={(e) => handleRoute("/special-occasions", e)}>
          Special Occasions
        </p>
        <p onClick={(e) => handleRoute("/contact-us", e)}>Contact</p>
      </div>
    </WebNav>
  ) : (
    <>
      <MobileNav>
        <div className="main-container">
          <img
            src={MenuIcon.src}
            alt="navigation-menu"
            className="menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          />
          <img
            src={HoneysucklesIcon.src}
            alt="honeysuckles-icon"
            className="mobile-logo"
            onClick={(e) => handleRoute("/", e)}
          />
        </div>
        {mobileOpen && (
          <div className="navigation roboto">
            <p
              onClick={(e) => {
                handleRoute("/about", e);
                setMobileOpen(false);
              }}
              className={pathname!.includes("/about") ? "selected" : ""}
            >
              About
            </p>
            <p
              onClick={(e) => {
                handleRoute("/weddings", e);
                setMobileOpen(false);
              }}
              className={pathname!.includes("/weddings") ? "selected" : ""}
            >
              Weddings
            </p>
            <p
              onClick={(e) => {
                handleRoute("/everyday", e);
                setMobileOpen(false);
              }}
              className={pathname!.includes("/everyday") ? "selected" : ""}
            >
              Everyday
            </p>
            <p
              onClick={(e) => {
                handleRoute("/special-occasions", e);
                setMobileOpen(false);
              }}
              className={
                pathname!.includes("/special-occasions") ? "selected" : ""
              }
            >
              Special Occasions
            </p>
            <p
              onClick={(e) => {
                handleRoute("/contact-us", e);
                setMobileOpen(false);
              }}
              className={pathname!.includes("/contact-us") ? "selected" : ""}
            >
              Contact
            </p>
          </div>
        )}
      </MobileNav>
    </>
  );
}
