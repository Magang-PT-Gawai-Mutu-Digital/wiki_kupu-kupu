import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";

import { useQuery } from "@apollo/client";
import { getAllDataKupu } from "../../GraphQL/Query";
import Carousel from "../../Components/Carousel";
import Button from "../../Components/Button";
import images from "../../Components/Carousel/images";

export default function Beranda() {
  const backgroundImage = {
    header: {
      backgroundImage: `url(${require("../../assets/spesies.png")})`,
      backgroundSize: "cover",
      borderRadius: "10px",
    },

    content: {
      backgroundColor: "rgba(192,192,192,0.5)",
    },
  };

  const [allKupu, setAllKupu] = useState([]);
  const { data: allDataKupu } = useQuery(getAllDataKupu);

  useEffect(() => {
    if (allDataKupu) {
      setAllKupu(allDataKupu?.species);
    }
  }, [allDataKupu]);

  return (
    <div className="h-full mb-8">
      <div className="laptop:relative">
        <Carousel images={images} />
        {/* spesies terbaru  */}
        <div className="laptop:mx-8 phone:mx-2 laptop:absolute w-11/12 bg-primary-white rounded-lg laptop:-mt-20 tablet:mt-8 phone:mt-8 shadow-xl p-4">
          <div className="flex justify-between ">
            <h3 className="text-lg font-semibold">Spesies Terbaru</h3>
            <NavLink to="/foto" className="text-sm hover:text-primary-green">
              SEE ALL
            </NavLink>
          </div>
          <div className="flex flex-wrap p-4 laptop:gap-12 tablet:gap-4 phone:gap-2 tablet:justify-center phone:justify-center">
            {allKupu.map((item, index) => (
              <>
                <div
                  key={index}
                  className="laptop:w-44 tablet:w-44 phone:w-44 pb-2 rounded-lg shadow-xl flex flex-wrap h-max flex-col items-center gap-2"
                >
                  <img
                    src={`data:image/jpeg;base64,${item.thumbnail}`}
                    alt="kupu-kupu"
                    className="w-full rounded-lg aspect-square"
                  />
                  <h3 className="font-semibold text-center">
                    {item.binomial_name}
                  </h3>
                  <p>{item.genus.famili.name}</p>
                  <div className="w-full">
                    <NavLink
                      to={`/detail/${item.id}`}
                      key={index}
                      state={{ item }}
                      onClick={item.id}
                      className="w-full flex justify-center items-center"
                    >
                      <Button>Detail</Button>
                    </NavLink>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* welcome  */}
      <div className="flex laptop:gap-96 pl-4 laptop:mt-96 tablet:mt-4 tablet:gap-4 phone:mt-4 phone:gap-4 py-8 bg-primary-lightGreen">
        <div className=" flex flex-col gap-4 text-center items-center">
          <h1 className="text-3xl font-bold uppercase">
            Selamat datang di website katalog kupu-kupu yang ada di taman
            kupu-kupu{" "}
            <h1 className="inline text-primary-green">gita persada</h1> lampung,
            indonesia
          </h1>
          <p className="text-base">
            Kupu-kupu merupakan salah satu jenis serangga yang termasuk ke dalam
            ordo Lepidoptera, yang berasal dari bahasa Yunani yaitu lepis yang
            berarti sisik dan ptera yang berarti sayap. Diperkirakan ada 17.500
            jenis kupu-kupu di dunia, tak kurang dari 1.600 jenis diantaranya
            tersebar di Indonesia
          </p>
          <div className="w-1/2">
            <NavLink to="/tentang">
              <Button>Tentang Kami</Button>
            </NavLink>
          </div>
        </div>
        <div className="flex items-center">
          <img src={require("../../assets/welcomepic.png")} alt="kupu-kupu" />
        </div>
      </div>

      {/* video youtube */}
      <div className="flex items-center justify-center my-8">
        <ReactPlayer
          width="80%"
          height="480px"
          url="https://youtu.be/QZJ2as1VMZM"
        ></ReactPlayer>
      </div>

      {/* fitur lainnya */}
      <h1 className="text-3xl font-bold text-center mb-8">Fitur Lainnya</h1>
      <div className="flex flex-wrap laptop:gap-24 phone:gap-4 justify-center">
        <div style={backgroundImage.header}>
          <NavLink to="/anatomi">
            <div
              className="rounded-lg w-48 h-48 flex items-center"
              style={backgroundImage.content}
            >
              <h1 className="text-2xl font-semibold text-center">
                Anatomi Kupu-Kupu
              </h1>
            </div>
          </NavLink>
        </div>

        <div style={backgroundImage.header}>
          <NavLink to="/metamorfosis">
            <div
              className="rounded-lg w-48 h-48 flex items-center"
              style={backgroundImage.content}
            >
              <h1 className="text-2xl font-semibold text-center">
                Metamorfosis Kupu-Kupu
              </h1>
            </div>
          </NavLink>
        </div>
        <div style={backgroundImage.header}>
          <a href="https://kupu-kupu.id/" target="_blank" rel="noreferrer">
            <div
              className="rounded-lg w-48 h-48 flex items-center"
              style={backgroundImage.content}
            >
              <h1 className="text-2xl font-semibold text-center">
                Artikel Kupu-Kupu
              </h1>
            </div>
          </a>
        </div>
        <div style={backgroundImage.header}>
          <a
            href="http://jurnal.kupu-kupu.id/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="rounded-lg w-48 h-48 flex items-center"
              style={backgroundImage.content}
            >
              <h1 className="text-2xl font-semibold text-center">
                Jurnal Kupu-Kupu
              </h1>
            </div>
          </a>
        </div>
      </div>

      {/* Lembaga */}
      <h1 className="text-3xl font-bold text-center my-8">
        Lembaga yang Berpartisipasi
      </h1>
      <div className="flex flex-wrap justify-center laptop:gap-12 phone:gap-2">
        <img
          src={require("../../assets/logo_gawai.jpeg")}
          alt="logo gawai mutu digital"
          width="240px"
        />
        <img
          src={require("../../assets/logo_gawai.jpeg")}
          alt="logo gawai mutu digital"
          width="240px"
        />
        <img
          src={require("../../assets/logo_gawai.jpeg")}
          alt="logo gawai mutu digital"
          width="240px"
        />
        <img
          src={require("../../assets/logo_gawai.jpeg")}
          alt="logo gawai mutu digital"
          width="240px"
        />
      </div>
    </div>
  );
}
