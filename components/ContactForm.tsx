"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { sendForm } from "./api";
import { ValentineSale } from "./sales";

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

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1424px) {
    .row {
      flex-wrap: wrap;
    }
  }

  .custom-label {
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

  .secondary {
    font-size: 20px;
    padding: 5px 20px;
    background-color: #f5f5f5;
    border: 1px solid #f66363;
    cursor: pointer;
    color: #f66363;
    width: fit-content;
    border-radius: 100px;
    position: relative;
    margin: 10px auto auto 0;

    &:hover {
      background-color: #f66363;
      color: #fff
    }
  }

  .primary {
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
    margin: auto 0 auto auto;

    &:disabled {
      background-color: #9f9f9f;
      cursor: not-allowed;
    }

    &:hover:enabled {
      background-color: #035e7b;
    }
  }

  @media (max-width: 768px) {
    .custom-label {
      font-size: 1.25rem;

      p {
        font-size: 1rem !important;
      }
    }

    textarea {
      min-height: 100px;
    }

    input,
    textarea {
      font-size: 1rem;
      border-size: 1px;
      border-radius: 2px;
    }

    .primary {
      font-size: 1.5rem;
    }
  }
`;

const StyledRadio = styled.li`
  label {
    display: inline-flex;
    align-items: center;
    font-size: 1.25rem;
    margin-top: 10px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  input {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  label::before {
    content: "";
    display: block;
    height: 18px;
    width: 18px;
    border: solid 1px #f66363;
    border-radius: 50%;
    margin-right: 0.5em;
  }

  input[type="radio"]:checked + input[type="radio"]::before {
    background: radial-gradient(
      0.75em circle at center,
      currentColor 50%,
      transparent 55%
    );
    box-shadow: 0 0 1em 0 rgba(10, 150, 255, 0.75);
    border-color: currentColor;
  }

  input[type="radio"]:checked + label::before {
    background: radial-gradient(
      0.75em circle at center,
      currentColor 50%,
      transparent 55%
    );
  }
`;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    sale: "None Selected",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkForm = (obj: any) => {
    const emailRegx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegx = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (obj.name === "" || obj.email === "" || obj.message === "") {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    await sendForm(user);
  };

  return (
    <>
      {!sent && (
        <Form id="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <label className="roboto custom-label">
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
            <label className="roboto custom-label">
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
          <label className="roboto custom-label">
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
          <label className="roboto custom-label">
            <p>Sale</p>
            <ul>
              {ValentineSale.map((sale, idx) => (
                <StyledRadio className="roboto" key={`option-${idx}`}>
                  <input
                    type="radio"
                    name="sale"
                    value={sale}
                    checked={user.sale === sale}
                    onChange={handleChange}
                    id={sale}
                  />
                  <label htmlFor={sale}>{sale}</label>
                </StyledRadio>
              ))}
            </ul>
            <button
              className="secondary"
              name="sale"
              value="None Selected"
              onClick={handleChange}
            >
              Deselect Option
            </button>
          </label>
          <label className="roboto custom-label">
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
          <button
            type="submit"
            className="primary raleway"
            onClick={checkForm(user) ? handleSubmit : () => {}}
            disabled={!checkForm(user)}
          >
            Submit
          </button>
        </Form>
      )}
    </>
  );
}
