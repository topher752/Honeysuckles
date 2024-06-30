"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Block = styled.div`
  background-color: #ffe0e0;
  padding: 80px 20px;
  width: 100%;

  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    color: #002e2c;

    p {
      font-size: 1.75rem;
      line-height: normal;

      .underline {
        font-style: normal !important;
        border-bottom: 2px solid #002e2c;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 50px 20px;
    h2 {
      font-size: 1.75rem;
    }

    p,
    span {
      font-size: 1.25rem !important;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 1.5rem;
    }
    p,
    span {
      font-size: 1rem !important;
    }
  }
`;

export default function ContactBlock() {
  const router = useRouter();
  return (
    <Block>
      <div className="text">
        <h2 className="raleway">Want to get into Contact?</h2>
        <p className="roboto">
          Email us at <span>honeysucklesflowers@gmail.com</span> or{" "}
          <span
            className="underline"
            onClick={(e) => {
              e.preventDefault();
              router.push("/contact-us");
            }}
          >
            submit a form here
          </span>
        </p>
      </div>
    </Block>
  );
}
