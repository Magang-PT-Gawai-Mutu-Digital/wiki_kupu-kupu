import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllThumbnail } from "../../GraphQL/Query";

export default function Foto() {
  const [images, setImages] = useState([]);
  const { data: image } = useQuery(getAllThumbnail);

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
              Taman Kupu-Kupu Gita Persada didirikan pada tahun 1997 oleh
              Anshori Djausal dan Herawati Soekardi sebagai model pelestarian
              kupu-kupu. Taman ini, sejak saat itu, telah berhasil melestarikan
              lebih dari 197 spesies kupu-kupu Sumatera. Dan jumlah ini juga
              meningkat setiap tahun seiring dengan penelitian tanaman makanan
              kupu-kupu, habitat mikro dan reproduksi. Berikut foto kupu-kupu
              yang ada di Taman Kupu-Kupu Gita Persada.
            </p>
          </div>
          <div className="gap-4 columns-4 phone:columns-2 tablet:columns-4">
            {images.map((image, index) => (
              <div className="relative ">
                <NavLink
                  to={`/detail/${image.id}`}
                  key={index}
                  state={{ image }}
                  onClick={image.id}
                >
                  <img
                    src={`data:image/jpeg;base64,${image.thumbnail}`}
                    alt={image.binomial_name}
                    className="w-full aspect-square mb-4 rounded-xl"
                  />
                  <p className="absolute inset-0 z-10 bg-primary-gray italic font-semibold text-center flex flex-col items-center justify-center rounded-xl opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                    {image.binomial_name}
                  </p>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
