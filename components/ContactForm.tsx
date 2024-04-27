"use client";

import React, { useRef, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  @media (max-width: 1424px) {
    .row {
      flex-wrap: wrap;
    }
  }

  label {
    font-size: 1.5rem;
    color: #212121;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    p {
      display: flex;
    }

    span {
      color: #ff0000;
    }
  }

  textarea {
    min-height: 190px;
    resize: vertical;
  }

  input,
  textarea {
    font-size: 1.5rem;
    border: 2px solid #f66363;
    border-radius: 5px;
    padding: 10px;
    outline: none;
  }

  input:-moz-placeholder {
    font-style: italic;
  }

  button {
    font-size: 30px;
    padding: 5px 20px;
    background-color: #002e2c;
    cursor: pointer;
    color: #f5f5f5;
    width: fit-content;
    border-radius: 100px;
    outline: none;
    border: none;
    position: relative;
    margin-top: 15px;
    margin: auto 0 auto auto;

    &:hover {
      background-color: #035e7b;
    }
  }
`;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validation = (type: string, value: any) => {
    let regex;
    if (type === "email") {
      regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    } else if (type === "phone") {
      regex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    }
    return regex!.test(value);
  };

  const handleSubmit = () => {
    console.log(user);
  };

  return (
    <>
      {!sent && (
        <Form id="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <label className="roboto">
              <p>
                Name<span>*</span>
              </p>
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                value={user.name}
                onChange={handleChange}
                className="roboto"
              />
            </label>
            <label className="roboto">
              <p>Phone Number</p>
              <input
                required={false}
                type="tel"
                name="phone"
                placeholder="Best Contact Number"
                value={user.phone}
                onChange={handleChange}
                className="roboto"
              />
            </label>
          </div>
          <label className="roboto">
            <p>
              Email<span>*</span>
            </p>
            <input
              required
              type="email"
              name="email"
              placeholder="Your Contact Email"
              value={user.email}
              onChange={handleChange}
              className="roboto"
            />
          </label>
          <label className="roboto">
            <p>
              Message<span>*</span>
            </p>
            <textarea
              required
              name="message"
              placeholder="How can we help you?"
              value={user.message}
              onChange={handleChange}
              className="roboto"
            />
          </label>
          <button type="submit" className="raleway" onClick={handleSubmit}>
            Submit
          </button>
        </Form>
      )}
    </>
  );
}
