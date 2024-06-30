"use client";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import ViewImage from "./ViewImage";

const Gallery = styled.div`
  padding: 65px 100px;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  grid-auto-rows: 300px;
  gap: 10px;
  grid-auto-flow: dense;

  div {
    display: flex;
    align-items: center;
  }

  img {
    object-fit: cover;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  .tall {
    grid-row: span 2;
  }

  .large {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    grid-auto-rows: 200px;
  }

  @media (max-width: 768px) {
    padding: 90px 75px 20px;
    grid-template-columns: 100%;
    grid-auto-rows: 300px;

    .tall,
    .large {
      grid-row: span 1;
      grid-column: span 1;
    }
  }

  @media (max-width: 400px) {
    padding: 90px 50px 20px;
  }
`;

export default function PhotoGallery({ images }: { images: any[] }) {
  const [viewImage, setViewImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>({});
  return (
    <>
      {viewImage && (
        <ViewImage
          closeModal={() => setViewImage(false)}
          image={selectedImage}
        />
      )}
      <Gallery style={viewImage ? {overflow: "none"} : {}}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={img.size}
            onClick={() => {
              setSelectedImage(img);
              setViewImage(true);
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              height={0}
              width={0}
              unoptimized
              loading="lazy"
            />
          </div>
        ))}
      </Gallery>
    </>
  );
}
