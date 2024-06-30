"use client";
import ContactImage from "@/public/Photos/ContactFlowers.webp";
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

  @media (max-width: 768px) {
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

    .contact-image {
      height: auto;
      width: 65vw;
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
        <img className="contact-image" src={ContactImage.src} />
      </ContactInfo>
    </>
  );
}
