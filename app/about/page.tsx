"use client";
import AboutImage from "@/public/Photos/AboutImage.webp";
import styled from "styled-components";
import ContactBlock from "@/components/ContactBlock";

const AboutInfo = styled.div`
  display: flex;
  gap: 100px;
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
`;

export default function ContactUsPage() {
  return (
    <>
      <AboutInfo>
        <div className="text raleway">
          <h2>Welcome to Honeysuckles</h2>
          <p className="roboto">
            Hi Friends, thanks for visiting. I've loved flowers all my life. I
            got that from my Grandmother, Mom &amp; lots of cousins with amazing
            green thumbs. One of my favorite memories is my Grandmother going
            out to her yard &amp; picking whatever was growing at the time. She'd
            come in and make the most beautiful arrangements, sometimes out of
            weeds. One day she used honeysuckle &amp; it was so fragrant. I loved
            picking honeysuckle as a child and enjoying it's nectar.
            <br /> <br />I enjoy creating with flowers &amp; greenery, making
            arrangements or some decoration with whatever I find. I am a Nurse
            by trade but love all things DIY &amp; outdoors. I always have several
            projects going on at the same time.
            <br /> <br />
            So how did Honeysuckles get started? Well, I was asked by a dear
            friend to be the florist for her daughter's wedding. I had so much
            fun, I wanted to do more and Honeysuckles was born.
            <br /> <br />
            If you are looking to host an event or would just like a sweet
            bouquet to brighten the day, I would be honored to help. Thanks for
            stopping by &amp; don't forget to stop and take in nature's beauty. If I
            may be of service, please contact me. I look forward to helping you.
          </p>
        </div>
        <img className="about-image" src={AboutImage.src} />
      </AboutInfo>
      <ContactBlock />
    </>
  );
}
