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

  @media (max-width: 768px) {
    align-items: center;
    padding: 40px;

    .navigation {
      flex-wrap: wrap;
      margin-bottom: 50px;
      font-size: 1.25rem;
    }
  }

  @media (max-width: 500px) {
    .navigation p {
      width: 100%;
    }
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
          href="https://www.linkedin.com/company/honeysucklesflowers"
          target="_blank"
        >
          <img src={LinkedIn.src} alt="linkedin"/>
        </a>
        <img src={Icon.src} style={{ height: "101px", width: "96px" }} alt="honeysuckles"/>
        <a
          href="https://www.instagram.com/honeysuckles_flowers/"
          target="_blank"
        >
          <img src={Instagram.src} alt="instagram"/>
        </a>
      </div>
    </StyledFooter>
  );
}
