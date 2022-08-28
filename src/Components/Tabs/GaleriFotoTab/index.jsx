import React, { useState } from "react";

export default function GaleriFotoTab() {
  const [images] = useState([
    {
      id: 1,
      src: require("../../../assets/spesies.png"),
      alt: "kupu-kupu",
    },
    {
      id: 2,
      src: require("../../../assets/spesies.png"),
      alt: "kupu-kupu",
    },
    {
      id: 3,
      src: require("../../../assets/spesies.png"),
      alt: "kupu-kupu",
    },
    {
      id: 4,
      src: require("../../../assets/spesies.png"),
      alt: "kupu-kupu",
    },
  ]);
  return (
    <div>
      <section className="body-font py-4">
        <div className="container px-8 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {images.map((image, index) => (
              <div className="lg:w-1/4 sm:w-1/2 p-4">
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width="248"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
