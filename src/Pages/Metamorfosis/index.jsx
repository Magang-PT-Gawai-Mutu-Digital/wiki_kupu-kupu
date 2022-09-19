import React from "react";

export default function Metamorfosis() {
  return (
    <div>
      <div className="flex flex-col text-center w-full my-8">
        <h1 className="phone:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Metamorfosis dari Kupu-Kupu
        </h1>
        <p className="laptop:w-2/3 mx-auto leading-relaxed text-base">
          Kupu-kupu adalah hewan yang mengalami metamorfosis senpurna dalam
          hidupnya, terdapat 4 fase, yaitu : telur - larva (ulat) - pupa
          (kepompong) - imago (kupu-kupu dewasa)
        </p>
      </div>
      <div className="flex flex-wrap gap-4 m-4 laptop:justify-between tablet:justify-between phone:justify-center">
        <div className="flex flex-col gap-4 items-center">
          <button className="w-64 max-h-64 p-4 text-center rounded-lg bg-primary-lightGreen transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-primary-lightGray">
            Telur merupakan fase pertama dalam metamorfosis kupu-kupu. Setiap
            kupu-kupu memiliki bentuk dan jumlah telur yang berbeda. Misalnya,
            Eurema blanda termasuk kupu-kupu yang menghasilkan banyak telur.
          </button>
          <h1 className="text-xl font-bold">Telur</h1>
          <img
            src={require("../../assets/telur.jpg")}
            alt="teur"
            className="w-64 rounded-lg transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            src={require("../../assets/ulat.jpg")}
            alt="teur"
            className="w-64 rounded-lg transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
          <h1 className="text-xl font-bold">Larva (Ulat)</h1>
          <button className="w-64 max-h-72 p-4 text-center rounded-lg bg-primary-lightGreen transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-primary-lightGray">
            Fase larva merupakan fase makan. Larva memakan daun tumbuhan, dan
            badannya membesar setiap hari sampai ukuran tertentu dan siap
            menjadi pupa. Larva dari setiap spesies kupu-kupu memakan daun
            tumbuhan tertentu. Oleh karena itu, disebut juga herbivor spesialis.
          </button>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <button className="w-64 max-h-64 p-4 text-center rounded-lg bg-primary-lightGreen transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-primary-lightGray">
            Fase pupa atau kepompong adalah fase setelah larva melepaskan
            kulitnya dan mengubah bentuk tubuhnya. Di dalam pupa terjadi proses
            pembentukan seekor kupu-kupu.
          </button>
          <h1 className="text-xl font-bold">Pupa (Kepompong)</h1>
          <img
            src={require("../../assets/kepompong.jpg")}
            alt="teur"
            className="w-64 rounded-lg transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            src={require("../../assets/kupu-kupu.jpg")}
            alt="teur"
            className="w-64 rounded-lg transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
          <h1 className="text-xl font-bold">Imago (Kupu-Kupu)</h1>
          <button className="w-64 max-h-72 p-4 text-center rounded-lg bg-primary-lightGreen transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-primary-lightGray">
            Kupu-kupu keluar dari pupa dalam keadaan basah. Setelah kira-kira
            3-4 jam, kupu-kupu terbang mencari nektar bunga, sari buah, dan
            pasangan. Kupu-kupu berumur sekitar 2 minggu hingga 2 bulan saja dan
            keturunannya berupa telur yang diletakkan pada daun muda yang
            dipilih induknya.
          </button>
        </div>
      </div>
    </div>
  );
}
