import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllThumbnail } from "../../GraphQL/Query";

export default function Foto() {
  // const [images] = useState([
  //   {
  //     id: 1,
  //     src: require("../../assets/spesies.png"),
  //     alt: "kupu-kupu",
  //   },
  //   {
  //     id: 2,
  //     src: require("../../assets/welcomepic.png"),
  //     alt: "kupu-kupu",
  //   },
  //   {
  //     id: 3,
  //     src: require("../../assets/TKGP-Logo.png"),
  //     alt: "kupu-kupu",
  //   },
  //   {
  //     id: 4,
  //     src: require("../../assets/spesies.png"),
  //     alt: "kupu-kupu",
  //   },
  //   {
  //     id: 5,
  //     src: require("../../assets/spesies.png"),
  //     alt: "kupu-kupu",
  //   },
  // ]);

  const [images, setImages] = useState([]);

  const { data: image } = useQuery(getAllThumbnail);

  console.log(images);

  useEffect(() => {
    if (image) {
      setImages(image?.species);
    }
  }, [image]);

  return (
    <div>
      <section className="body-font">
        <div className="container px-5 py-4 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="phone:text-3xl text-2xl font-medium title-font laptop:w-1/3 laptop:mb-0 mb-4">
              Foto Kupu-Kupu di Taman Kupu-Kupu Gita Persada
            </h1>
            <p className="laptop:pl-6 laptop:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="gap-4 columns-4">
            {images.map((image, index) => (
              <div className="relative ">
              <NavLink to={`/detail/${image.id}`}
                      key={index}
                      state={{ image }}
                      onClick={image.id}>
                <img
                  src={`data:image/jpeg;base64,${image.thumbnail}`}
                  alt={image.binomial_name}
                  className="w-full aspect-square mb-4 rounded-xl"
                />
                <p className="absolute inset-0 z-10 bg-primary-gray italic font-semibold text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">{image.binomial_name}</p>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
