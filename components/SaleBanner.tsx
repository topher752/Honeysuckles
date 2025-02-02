"use client";

import { useMedia } from "@/app/hooks/useMedia";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Banner = styled.div`
  padding: 15px;
  width: 100%;
  background-color: #750d37;
  position: fixed;
  display: flex;
  top: 0;
  z-index: 999;
  color: #fff;
  align-items: center;
  gap: 15px;
  justify-content: center;
  cursor: pointer;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1.125rem;
  }

  span {
    text-decoration: underline;
  }

  @media (max-width: 1000px) {
    h3,
    p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 395px) {
    height: 47px;
    padding: 0;
    gap: 5px;

    h3,
    p {
      font-size: 0.75rem;
    }
  }
`;

export default function SaleBanner() {
  const max768 = useMedia("(max-width: 768px");
  const router = useRouter();

  return (
    <Banner
      onClick={(e) => {
        e.preventDefault();
        router.push("/sale");
      }}
    >
      <h3 className="raleway">Valentines Offer!</h3>
      {!max768 ? (
        <p className="roboto">
          Celebrate love this Valentine&#39;s with our stunning blooms—
          <span>shop now for exclusive offers!</span>
        </p>
      ) : (
        <p className="roboto">
          <span>Shop now for exclusive offers!</span>
        </p>
      )}
    </Banner>
  );
}
