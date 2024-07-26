"use client";
// import AboutImage from "../../components/Photos/AboutImage.webp";
import styled from "styled-components";
import ContactBlock from "@/components/ContactBlock";
// import Image from "next/image";

const AboutInfo = styled.div`
  display: flex;
  gap: 50px;
  padding: 65px 100px;
  justify-content: center;

  .about-image {
    max-height: 600px;
    width: auto;
    height: 75vh;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 50%;

    h2 {
      text-transform: uppercase;
    }

    p {
      font-size: 1.3rem;
      width: 100%;
      color: #212121;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 85px 50px 50px 50px;
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

    .about-image {
      height: auto;
      width: 65vw;
      max-height: none;
    }
  }
`;

export default function ContactUsPage() {
  return (
    <>
      <AboutInfo>
        <div className="text raleway">
          <h2>Welcome to Honeysuckles</h2>
          <p className="roboto">
            Hi Friends, thanks for visiting. I&apos;ve loved flowers all my
            life. I got that from my Grandmother, Mom &amp; lots of cousins with
            amazing green thumbs. One of my favorite memories is my Grandmother
            going out to her yard &amp; picking whatever was growing at the
            time. She&apos;d come in and make the most beautiful arrangements,
            sometimes out of weeds. One day she used honeysuckle &amp; it was so
            fragrant. I loved picking honeysuckle as a child and enjoying
            it&apos;s nectar.
            <br /> <br />I enjoy creating with flowers &amp; greenery, making
            arrangements or some decoration with whatever I find. I am a Nurse
            by trade but love all things DIY &amp; outdoors. I always have
            several projects going on at the same time.
            <br /> <br />
            So how did Honeysuckles get started? Well, I was asked by a dear
            friend to be the florist for her daughter&apos;s wedding. I had so
            much fun, I wanted to do more and Honeysuckles was born.
            <br /> <br />
            If you are looking to host an event or would just like a sweet
            bouquet to brighten the day, I would be honored to help. Thanks for
            stopping by &amp; don&apos;t forget to stop and take in
            nature&apos;s beauty. If I may be of service, please contact me. I
            look forward to helping you.
          </p>
        </div>
        {/* <Image
          height={0}
          width={0}
          unoptimized
          loading="lazy"
          className="about-image"
          src={AboutImage.src}
          alt="about-honeysuckles"
        /> */}
      </AboutInfo>
      <ContactBlock />
    </>
  );
}
