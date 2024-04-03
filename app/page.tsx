"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
// import LandingImage from "@/public/Photos/LandingBackground.png";
import Icon from "@/public/Icon.svg";
import Arrow from "@/public/Arrow.svg";
import ContactBlock from "@/components/ContactBlock";

const LandingBackground = styled.div`
  width: 100%;
  height: auto;
  padding: 100px 0;
  background-size: cover;
  background-repeat: no-repeat;

  .items {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    align-items: center;
    margin-bottom: 75px;

    img {
      max-height: 200px;
      width: auto;
      height: 100%;
    }

    h1 {
      filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.25));
      width: 70%;
      text-align: center;
      color: #fff;
    }
  }
`;

const Container = styled.div`
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  gap: 125px;
`;

const NavBlock = styled.div`
  display: flex;
  gap: 50px;
  max-height: fit-content;
  justify-content: center;

  .image {
    height: 75vh;
    max-width: 350px;
    max-height: 350px;
    width: 75vw;
    background-image: no-repeat;
    background-size: 100%;
    border-radius: 10px;
  }

  h2 {
    text-transform: uppercase;
  }

  p {
    font-size: 28px;
  }

  .link {
    font-weight: bold;
    color: #be7c4d;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 40%;

    .button {
      display: flex;
      gap: 10px;
    }
  }
`;

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <LandingBackground
        // style={{ backgroundImage: `url(${LandingImage.src})` }}
      >
        <div className="items">
          <img src={Icon.src} />
          <h1 className="raleway">
            Creating elegant floral and greenery arrangements
          </h1>
        </div>
      </LandingBackground>
      <Container>
        <NavBlock>
          <div className="text">
            <h2 className="raleway">Weddings</h2>
            <p className="roboto">
              From church arrangements to reception centerpieces and everything
              in between; create elegant pieces to celebrate your special day.
              Choose your color palate, favorite flowers, and style, and let's
              celebrate.
            </p>
            <div
              className="button"
              onClick={(e) => {
                e.preventDefault();
                router.push("/weddings");
              }}
            >
              <p className="link raleway">
                View more in <span>Weddings</span>
              </p>
              <img src={Arrow.src} />
            </div>
          </div>
          <div className="image" style={{ backgroundColor: "#d5d5d5" }} />
        </NavBlock>
        <NavBlock style={{ flexDirection: "row-reverse" }}>
          <div className="text">
            <h2 className="raleway">Flower Arrangements</h2>
            <p className="roboto">
              Birthdays, Anniversaries, loss of a loved one, or any other
              occasion; create an arrangement in any size with colors of your
              choosing.
            </p>
            <div
              className="button"
              onClick={(e) => {
                e.preventDefault();
                router.push("/everyday");
              }}
            >
              <p className="link raleway">
                View more in <span>Everyday</span>
              </p>
              <img src={Arrow.src} />
            </div>
          </div>
          <div className="image" style={{ backgroundColor: "#d5d5d5" }} />
        </NavBlock>
        <NavBlock>
          <div className="text">
            <h2 className="raleway">Special Occasions</h2>
            <p className="roboto">
              Hosting an event? Dinner parties, Showers, Bunco to BBQ's; add
              special touches with fresh decorations and swags. Create beautiful
              and elegant decorations to enhance your event.
            </p>
            <div
              className="button"
              onClick={(e) => {
                e.preventDefault();
                router.push("/special-occasions");
              }}
            >
              <p className="link raleway">
                View more in <span>Special Occasions</span>
              </p>
              <img src={Arrow.src} />
            </div>
          </div>
          <div className="image" style={{ backgroundColor: "#d5d5d5" }} />
        </NavBlock>
      </Container>
      <ContactBlock />
    </div>
  );
}
