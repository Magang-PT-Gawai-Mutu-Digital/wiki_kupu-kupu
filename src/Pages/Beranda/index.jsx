import React from "react";
import ReactPlayer from "react-player";

import Carousel from "../../Components/Carousel";
import Button from "../../Components/Button";

import spesies from "../../assets/spesies.png";
import welcomepic from "../../assets/welcomepic.png";
import logo from "../../assets/logo_gawai.jpeg"
import Footer from "../../Components/Footer";
import images from "../../Components/Carousel/images";

export default function Beranda() {
  const backgroundImage = {
    header: {
      backgroundImage: `url(${spesies})`,
      backgroundSize: "cover",
      borderRadius: "10px",
    },

    content: {
      backgroundColor: "rgba(192,192,192,0.5)",
    },
  };
  return (
    <div className="h-full">
      <div className="relative">
        <Carousel images={images}/>
        {/* spesies terbaru  */}
        <div className="mx-8 absolute bg-primary-white rounded-lg -mt-20 shadow-xl p-4">
          <div className="flex justify-between ">
            <h3 className="text-lg font-semibold">Spesies Terbaru</h3>
            <h5 className="text-sm">SEE ALL</h5>
          </div>
          <div className="flex flex-wrap p-4 gap-14">
            <div className="w-44 rounded-lg shadow-xl flex flex-col items-center gap-2">
              <img
                src={spesies}
                alt="kupu-kupu"
                width="176"
                className="rounded-lg"
              />
              <h3 className="font-semibold">Nama kupu-kupu</h3>
              <p>Famili</p>
              <Button>Detail</Button>
            </div>
            {/* perulangan  */}
            <div className="w-44 rounded-lg shadow-xl flex flex-col items-center gap-2">
              <img
                src={spesies}
                alt="kupu-kupu"
                width="176"
                className="rounded-lg"
              />
              <h3 className="font-semibold">Nama kupu-kupu</h3>
              <p>Famili</p>
              <Button>Detail</Button>
            </div>
            <div className="w-44 rounded-lg shadow-xl flex flex-col items-center gap-2">
              <img
                src={spesies}
                alt="kupu-kupu"
                width="176"
                className="rounded-lg"
              />
              <h3 className="font-semibold">Nama kupu-kupu</h3>
              <p>Famili</p>
              <Button>Detail</Button>
            </div>
            <div className="w-44 rounded-lg shadow-xl flex flex-col items-center gap-2">
              <img
                src={spesies}
                alt="kupu-kupu"
                width="176"
                className="rounded-lg"
              />
              <h3 className="font-semibold">Nama kupu-kupu</h3>
              <p>Famili</p>
              <Button>Detail</Button>
            </div>
            <div className="w-44 pb-2 rounded-lg shadow-xl flex flex-col items-center gap-2">
              <img
                src={spesies}
                alt="kupu-kupu"
                width="176"
                className="rounded-lg"
              />
              <h3 className="font-semibold">Nama kupu-kupu</h3>
              <p>Famili</p>
              <Button>Detail</Button>
            </div>
          </div>
        </div>
      </div>

      {/* welcome  */}
      <div className="container flex gap-96 pl-4 mt-96 py-8 bg-primary-lightGreen">
        <div className=" flex flex-col gap-4">
          <h1 className="text-3xl font-bold uppercase">
            Selamat datang di taman kupu-kupu gita persada lampung, indonesia
          </h1>
          <p className="text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut cumque
            eos excepturi quaerat, voluptatem eveniet fugit ipsam fugiat ullam
            quibusdam temporibus nihil officiis dolore porro rem deleniti
            dolorum reprehenderit odit.
          </p>
          <div className="w-1/2">
            <Button>Tentang Kami</Button>
          </div>
        </div>
        <div>
          <img src={welcomepic} alt="kupu-kupu" />
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
          <div
            className="rounded-lg w-48 h-48 flex items-center"
            style={backgroundImage.content}
          >
            <h1 className="text-2xl font-semibold text-center">
              Anatomi Kupu-Kupu
            </h1>
          </div>
        </div>

        {/* loop  */}
        <div style={backgroundImage.header}>
          <div
            className="rounded-lg w-48 h-48 flex items-center"
            style={backgroundImage.content}
          >
            <h1 className="text-2xl font-semibold text-center">
              Konservasi Kupu-Kupu
            </h1>
          </div>
        </div>
        <div style={backgroundImage.header}>
          <div
            className="rounded-lg w-48 h-48 flex items-center"
            style={backgroundImage.content}
          >
            <h1 className="text-2xl font-semibold text-center">
              Artikel Kupu-Kupu
            </h1>
          </div>
        </div>
        <div style={backgroundImage.header}>
          <div
            className="rounded-lg w-48 h-48 flex items-center"
            style={backgroundImage.content}
          >
            <h1 className="text-2xl font-semibold text-center">
              Habitat Kupu-Kupu
            </h1>
          </div>
        </div>

      </div>

      {/* Lembaga */}
      <h1 className="text-3xl font-bold text-center my-8">Lembaga yang Berpartisipasi</h1>
      <div className="flex justify-center gap-12">
        <img src={logo} alt="logo gawai mutu digital" width="240px" />
        <img src={logo} alt="logo gawai mutu digital" width="240px" />
        <img src={logo} alt="logo gawai mutu digital" width="240px" />
        <img src={logo} alt="logo gawai mutu digital" width="240px" />
      </div>
      
      <Footer/>
    </div>

  );
}
