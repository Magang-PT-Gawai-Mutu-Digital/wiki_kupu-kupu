import React, { useState } from "react";

export default function Foto() {
  const [images] = useState([
    {
      id: 1,
      src: require("../../assets/spesies.png"),
      alt: "kupu-kupu",
    },
    {
      id: 2,
      src: require("../../assets/welcomepic.png"),
      alt: "kupu-kupu",
    },
    {
      id: 3,
      src: require("../../assets/TKGP-Logo.png"),
      alt: "kupu-kupu",
    },
    {
      id: 4,
      src: require("../../assets/spesies.png"),
      alt: "kupu-kupu",
    },
    {
      id: 5,
      src: require("../../assets/spesies.png"),
      alt: "kupu-kupu",
    },
  ]);
  return (
    <div>
      <section className="body-font">
        <div className="container px-5 py-4 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4">
              Foto Kegiatan di Taman Kupu-Kupu
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <>
              <div className="flex flex-wrap w-1/2">
                {images.map((image, index) => (
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover h-full object-center block"
                    />
                  </div>
                ))}
                {images.map((image, index) => (
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover h-full object-center block"
                    />
                  </div>
                ))}
                {images.map((image, index) => (
                  <div className="md:p-2 p-1 w-full">
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center block"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap w-1/2">
                {images.map((image, index) => (
                  <div className="md:p-2 p-1 w-full">
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center block"
                    />
                  </div>
                ))}
                {images.map((image, index) => (
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover h-full object-center block"
                    />
                  </div>
                ))}
                {images.map((image, index) => (
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover h-full object-center block"
                    />
                  </div>
                ))}
              </div>
            </>
          </div>
        </div>
      </section>
    </div>
  );
}
