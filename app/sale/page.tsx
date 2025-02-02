"use client";
import styled from "styled-components";
import Image from "next/image";
import Certificate from "../../public/Photos/Sales/Valentines/GiftCertificate.webp";
import LargePresecco from "../../public/Photos/Sales/Valentines/Large_Presecco.webp";
import SmallPresecco from "../../public/Photos/Sales/Valentines/SmallProsecco.webp";
import ContactBlock from "@/components/ContactBlock";

const SaleInfo = styled.div`
  display: flex;
  gap: 50px;
  padding: 65px 100px;
  justify-content: center;
  flex-direction: column;

  .header-text {
    display: flex;
    flex-direction: column;
    gap: 30px;

    h2 {
      text-transform: uppercase;
      color: #002e2c !important;
    }

    p {
      font-size: 1.3rem;
      width: 100%;
      color: #212121;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 50px;
    align-items: center;

    .text {
      width: 100%;
      gap: 20px;

      h2 {
        font-size: 1.75rem;
      }

      p {
        font-size: 1.25rem;
      }
    }
  }
`;

const SaleContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  .images {
    display: flex;
    gap: 10px;
  }

  .image {
    max-height: 325px;
    min-height: 150px;
    width: auto;
    height: 50vh;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    aspect-ratio: auto;
  }

  .text {
    font-size: 1.3rem;
    width: 100%;
    color: #212121;
    max-width: 500px;

    span {
      color: #750d37;
      font-weight: bold;
      font-style: normal;
    }
  }

  @media (max-width: 950px) {
    .image {
      height: 20vh;
    }
    .text {
      font-size: 1.25rem;
    }
  }
`;

export default function ContactUsPage() {
  return (
    <>
      <SaleInfo>
        <div className="header-text raleway">
          <h2>Happy Valentines!</h2>
          <p className="roboto">
            Valentine's Day gifts and flowers are the ultimate token of love and
            affection! This month, we are happy to offer the following options
            to you to share this month with all inquiries:
          </p>
        </div>
        <SaleContainer>
          <ImageBlock>
            <Image
              className="image"
              src={Certificate.src}
              height={0}
              width={0}
              unoptimized
              loading="lazy"
              alt="valentine certificate"
            />
            <p className="text roboto">
              Celebrate this Valentines with a $5 Gift Certificate from
              Starbucks or Dunkin' with a small bouquet for <span>$20</span>
            </p>
          </ImageBlock>
          <ImageBlock>
            <div className="images">
              <Image
                className="image"
                src={SmallPresecco.src}
                height={0}
                width={0}
                unoptimized
                loading="lazy"
                alt="small presecco"
              />
              <Image
                className="image"
                src={LargePresecco.src}
                height={0}
                width={0}
                unoptimized
                loading="lazy"
                alt="large presecco"
              />
            </div>
            <p className="text roboto">
              Celebrate this Valentines with by gifting a Bottle of Presecco
              customized with a beloved floral arrangement, starting{" "}
              <span>$15 for a small bottle</span> and{" "}
              <span>$25 for large.</span>
            </p>
          </ImageBlock>
        </SaleContainer>
      </SaleInfo>
      <ContactBlock />
    </>
  );
}
