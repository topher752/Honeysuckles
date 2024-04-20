"use client";
import AboutImage from "@/public/Photos/AboutImage.webp";
import styled from "styled-components";
import ContactForm from "@/components/ContactForm";

const ContactInfo = styled.div`
  display: flex;
  gap: 100px;
  padding: 65px 100px;
  justify-content: center;

  .contact-image {
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
      color: #002e2c !important;
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
      <ContactInfo>
        <div className="text raleway">
          <h2>Contact Us</h2>
          <p className="roboto">
            Thanks for checking out the site. Lets connect for any of your event
            inquiries and questions.
          </p>
          <ContactForm />
        </div>
        {/* <img className="contact-image" src={AboutImage.src} /> */}
      </ContactInfo>
    </>
  );
}
