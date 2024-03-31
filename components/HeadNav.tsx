"use client";

import HeadLogo from "@/public/HeadLogo.svg";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Navigation = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 75px;

  img {
    max-height: 85px;
    width: auto;
    height: 75%;
    cursor: pointer;
  }

  .items {
    display: flex;
    gap: 38px;
    font-size: 24px;
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
`;

export default function HeadNav() {
  const router = useRouter();
  const handleRoute = (url: string, e: any) => {
    e.preventDefault();
    router.push(url);
  };

  return (
    <Navigation>
      <img src={HeadLogo.src} onClick={(e) => handleRoute("/", e)} />
      <div className="items roboto">
        <p onClick={(e) => handleRoute("/about", e)}>About</p>
        <p onClick={(e) => handleRoute("/weddings", e)}>Weddings</p>
        <p onClick={(e) => handleRoute("/everyday", e)}>Everyday</p>
        <p onClick={(e) => handleRoute("/special-occasions", e)}>
          Special Occasions
        </p>
        <p onClick={(e) => handleRoute("/contact-us", e)}>Contact</p>
      </div>
    </Navigation>
  );
}
