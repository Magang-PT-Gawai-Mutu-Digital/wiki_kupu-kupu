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
  console.log(allKupu);
  const { data: allDataKupu } = useQuery(getAllDataKupu);

  useEffect(() => {
    if (allDataKupu) {
      setAllKupu(allDataKupu?.species);
    }
  }, [allDataKupu]);

  return (
    <div className="h-full mb-8">
      <div className="relative">
        <Carousel images={images} />
        {/* spesies terbaru  */}
        <div className="lg:mx-8 sm:mx-2 absolute w-11/12 bg-primary-white rounded-lg -mt-20 shadow-xl p-4">
          <div className="flex justify-between ">
            <h3 className="text-lg font-semibold">Spesies Terbaru</h3>
            <NavLink
              to="/klasifikasi"
              className="text-sm hover:text-primary-green"
            >
              SEE ALL
            </NavLink>
          </div>
          <div className="flex flex-wrap p-4 gap-12">
            {allKupu.map((item, index) => (
              <>
                <div
                  key={index}
                  className="w-44 pb-2 rounded-lg shadow-xl flex flex-wrap h-max flex-col items-center gap-2"
                >
                  <img
                    src={`data:image/jpeg;base64,${item.thumbnail}`}
                    alt="kupu-kupu"
                    width="176"
                    className="rounded-lg"
                  />
                  <h3 className="font-semibold">{item.binomial_name}</h3>
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
      <div className="flex lg:gap-96 pl-4 lg:mt-96 md:mt-80 md:gap-4 sm:mt-64 sm:gap-4 py-8 bg-primary-lightGreen">
        <div className=" flex flex-col gap-4">
          <h1 className="text-3xl font-bold uppercase">
            Selamat datang di taman kupu-kupu{" "}
            <h1 className="inline text-primary-green">gita persada</h1> lampung,
            indonesia
          </h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            nesciunt perspiciatis atque incidunt laudantium, accusamus culpa
            totam nulla error saepe non, doloremque, est ipsa nobis recusandae
            praesentium repellendus deserunt similique!
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
          url="https://youtu.be/6hN2YEQ8jq4"
        ></ReactPlayer>
      </div>

      {/* fitur lainnya */}
      <h1 className="text-3xl font-bold text-center mb-8">Fitur Lainnya</h1>
      <div className="flex gap-24 justify-center">
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

        {/* loop  */}
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
          <NavLink to="/artikel">
            <div
              className="rounded-lg w-48 h-48 flex items-center"
              style={backgroundImage.content}
            >
              <h1 className="text-2xl font-semibold text-center">
                Artikel Kupu-Kupu
              </h1>
            </div>
          </NavLink>
        </div>
        <div style={backgroundImage.header}>
          <NavLink to="/jurnal">
            <div
              className="rounded-lg w-48 h-48 flex items-center"
              style={backgroundImage.content}
            >
              <h1 className="text-2xl font-semibold text-center">
                Jurnal Kupu-Kupu
              </h1>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Lembaga */}
      <h1 className="text-3xl font-bold text-center my-8">
        Lembaga yang Berpartisipasi
      </h1>
      <div className="flex justify-center gap-12">
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
