"use client";

import styled from "styled-components";
import Image from "next/image";
import Close from "@/public/CloseIcon.svg";

const ImageModal = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  z-index: 1002;
  display: flex;
  justify-content: center;

  .next-image {
    width: 25%;
    height: auto;
    background-size: 100%;
    object-fit: cover;
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: 20px;
    height: 50px;
    width: auto;
  }
`;

export default function ViewImage({
  image,
  closeModal,
}: {
  image: any;
  closeModal: () => void;
}) {
  return (
    <ImageModal>
      <img
        src={Close.src}
        alt="close-modal"
        onClick={closeModal}
        className="close"
      />
      <Image
        src={image.src}
        alt={image.alt}
        height={0}
        width={0}
        unoptimized
        loading="lazy"
        className="next-image"
      />
    </ImageModal>
  );
}
