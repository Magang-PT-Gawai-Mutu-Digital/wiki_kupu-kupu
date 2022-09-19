import React from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

export default function Tentang() {
  const markerIcon = new L.Icon({
    iconUrl: require('../../assets/marker.png'),
    iconSize: [20, 30]
  })
  return (
    <div>
      <div className="container flex gap-12 my-4 pl-4 py-8 bg-primary-lightGreen">
        <div className="laptop:w-2/3 flex flex-col gap-4 tablet:w-full tablet:p-4 phone:w-full phone:p-4">
          <h1 className="text-3xl font-bold uppercase">
            taman kupu-kupu{" "}
            <h1 className="inline text-primary-green">gita persada</h1> lampung
          </h1>
          <div className="text-base flex flex-col gap-2">
            <p>
              {" "}
              Indonesia yang dikenal sebagai negara mega biodiversitas memiliki
              lebih dari 6.000 spesies kupu-kupu. Banyak dari spesies ini berada
              di ambang kepunahan.{" "}
            </p>
            <p>
              {" "}
              Taman Kupu-Kupu Gita Persada didirikan untuk melawan kepunahan.
              Taman Kupu-Kupu Gita Persada didirikan pada tahun 1997 oleh
              Anshori Djausal dan Herawati Soekardi sebagai model pelestarian
              kupu-kupu. Taman ini, sejak saat itu, telah berhasil melestarikan
              lebih dari 180 spesies kupu-kupu Sumatera. Dan jumlah ini juga
              meningkat setiap tahun seiring dengan penelitian tanaman makanan
              kupu-kupu, habitat mikro dan reproduksi.{" "}
            </p>
            <p>
              {" "}
              Taman ini juga menjadi tempat pendidikan khususnya pendidikan
              lingkungan, penelitian dan daya tarik wisata.
            </p>
          </div>
        </div>
        <div className="w-4/12 laptop:justify-end laptop:flex tablet:hidden phone:hidden">
          <img
            src={require("../../assets/welcomepic.png")}
            alt="kupu-kupu"
            width="256"
          />
        </div>
      </div>

      {/* address  */}
      <div className="flex laptop:flex-row tablet:flex-col phone:flex-col gap-8 my-8">
        {/* maps  */}
          <MapContainer style={{ height: "350px", width: "100%" }} center={[-5.420787, 105.188644]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-5.420787, 105.188644]} icon={markerIcon}>
              <Popup className="font-semibold">
                 Taman Kupu-Kupu Gita Persada
              </Popup>
            </Marker>
          </MapContainer>

        <div className="rounded-lg shadow-xl p-4 mx-4 flex flex-col gap-4 justify-center">
          <div>
            <h1 className="text-lg font-semibold">Alamat</h1>
            <p>
              Taman Kupu-kupu Gita Persada, Jl. Wan Abdurrahman, Hutan, Kec.
              Hutan, Lampung, 35158
            </p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Email</h1>
            <p>martinus.id@gmail.com</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Telepon</h1>
            <p>085764647399</p>
          </div>
        </div>
      </div>
    </div>
  );
}
