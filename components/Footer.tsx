"use client";

import styled from "styled-components";
import Icon from "@/public/Icon.svg";
import LinkedIn from "@/public/LinkedIn.svg";
import Instagram from "@/public/Instagram.svg";
import { useRouter } from "next/navigation";

const StyledFooter = styled.div`
  background-color: #002e2c;
  padding: 40px 0 25px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  .navigation {
    display: flex;
    gap: 45px;
    color: #f5f5f5;
    text-transform: uppercase;
    font-size: 1.5rem;

    p {
      cursor: pointer;
    }
  }

  .icons {
    display: flex;
    gap: 25px;
    align-items: center;
  }
`;

export default function Footer() {
  const router = useRouter();
  const handleRoute = (url: string, e: any) => {
    e.preventDefault();
    router.push(url);
  };
  return (
    <StyledFooter>
      <div className="navigation roboto">
        <p onClick={(e) => handleRoute("/about", e)}>About Us</p>
        <p onClick={(e) => handleRoute("/weddings", e)}>Weddings</p>
        <p onClick={(e) => handleRoute("/everyday", e)}>Everyday</p>
        <p onClick={(e) => handleRoute("/special-occasions", e)}>
          Special Occasions
        </p>
        <p onClick={(e) => handleRoute("/contact-us", e)}>Contact</p>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/jill-tate-bsn-rn-42499423/"
          target="_blank"
        >
          <img src={LinkedIn.src} />
        </a>
        <img src={Icon.src} style={{ height: "101px", width: "96px" }} />
        <a
          href="https://www.instagram.com/honeysuckles_flowers/"
          target="_blank"
        >
          <img src={Instagram.src} />
        </a>
      </div>
    </StyledFooter>
  );
}
