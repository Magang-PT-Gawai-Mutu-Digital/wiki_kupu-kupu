import React from "react";

export default function Tentang() {
  return (
    <div>
      {/* welcome  */}
      <div className="container flex gap-12 my-4 pl-4 py-8 bg-primary-lightGreen">
        <div className="w-2/3 flex flex-col gap-4">
          <h1 className="text-3xl font-bold uppercase">
            taman kupu-kupu <h1 className="inline text-primary-green">gita persada</h1> lampung
          </h1>
          <div className="text-base flex flex-col gap-2">
           <p> Indonesia yang dikenal sebagai negara mega biodiversitas memiliki
            lebih dari 6.000 spesies kupu-kupu. Banyak dari spesies ini berada
            di ambang kepunahan. </p>
            <p> Taman Kupu-Kupu Gita Persada didirikan untuk
            melawan kepunahan. Taman Kupu-Kupu Gita Persada didirikan pada tahun
            1997 oleh Anshori Djausal dan Herawati Soekardi sebagai model
            pelestarian kupu-kupu. Taman ini, sejak saat itu, telah berhasil
            melestarikan lebih dari 180 spesies kupu-kupu Sumatera. Dan jumlah
            ini juga meningkat setiap tahun seiring dengan penelitian tanaman
            makanan kupu-kupu, habitat mikro dan reproduksi. </p>
            <p> Taman ini juga menjadi tempat pendidikan khususnya pendidikan lingkungan,
            penelitian dan daya tarik wisata.</p>
          </div>
        </div>
        <div className="w-4/12 flex justify-end">
          <img
            src={require("../../assets/welcomepic.png")}
            alt="kupu-kupu"
            width="256"
          />
        </div>
      </div>

      {/* address  */}
      <div className="flex gap-8 my-8">
        {/* maps  */}
        <div>
            <img src={require("../../assets/carousel-1.png")} alt="" />
        </div>

        <div className="rounded-lg shadow-xl p-4 mx-4 flex flex-col gap-4">
            <div>
                <h1 className="text-lg font-semibold">Alamat</h1>
                <p>Taman Kupu-kupu Gita Persada, Jl. Wan Abdurrahman, Hutan, Kec. Hutan, Lampung, 35158</p>
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
