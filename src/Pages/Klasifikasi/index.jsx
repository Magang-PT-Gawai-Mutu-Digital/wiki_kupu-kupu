import React from "react";
import Button from "../../Components/Button";

export default function Klasifikasi() {
  return (
    <div>
      <section className="body-font py-4">
        <div className="container px-8 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="w-64 rounded-lg shadow-xl flex flex-col items-center gap-2 pb-2">
                <img
                  src={require("../../assets/spesies.png")}
                  alt="kupu-kupu"
                  width="256"
                  className="rounded-lg"
                />
                <h3 className="font-semibold">Nama kupu-kupu</h3>
                <p>Famili</p>
                <Button>Detail</Button>
              </div>
            </div>

            {/* perulangan */}
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="w-64 rounded-lg shadow-xl flex flex-col items-center gap-2 pb-2">
                <img
                  src={require("../../assets/spesies.png")}
                  alt="kupu-kupu"
                  width="256"
                  className="rounded-lg"
                />
                <h3 className="font-semibold">Nama kupu-kupu</h3>
                <p>Famili</p>
                <Button>Detail</Button>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="w-64 rounded-lg shadow-xl flex flex-col items-center gap-2 pb-2">
                <img
                  src={require("../../assets/spesies.png")}
                  alt="kupu-kupu"
                  width="256"
                  className="rounded-lg"
                />
                <h3 className="font-semibold">Nama kupu-kupu</h3>
                <p>Famili</p>
                <Button>Detail</Button>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="w-64 rounded-lg shadow-xl flex flex-col items-center gap-2 pb-2">
                <img
                  src={require("../../assets/spesies.png")}
                  alt="kupu-kupu"
                  width="256"
                  className="rounded-lg"
                />
                <h3 className="font-semibold">Nama kupu-kupu</h3>
                <p>Famili</p>
                <Button>Detail</Button>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="w-64 rounded-lg shadow-xl flex flex-col items-center gap-2 pb-2">
                <img
                  src={require("../../assets/spesies.png")}
                  alt="kupu-kupu"
                  width="256"
                  className="rounded-lg"
                />
                <h3 className="font-semibold">Nama kupu-kupu</h3>
                <p>Famili</p>
                <Button>Detail</Button>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="w-64 rounded-lg shadow-xl flex flex-col items-center gap-2 pb-2">
                <img
                  src={require("../../assets/spesies.png")}
                  alt="kupu-kupu"
                  width="256"
                  className="rounded-lg"
                />
                <h3 className="font-semibold">Nama kupu-kupu</h3>
                <p>Famili</p>
                <Button>Detail</Button>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="w-64 rounded-lg shadow-xl flex flex-col items-center gap-2 pb-2">
                <img
                  src={require("../../assets/spesies.png")}
                  alt="kupu-kupu"
                  width="256"
                  className="rounded-lg"
                />
                <h3 className="font-semibold">Nama kupu-kupu</h3>
                <p>Famili</p>
                <Button>Detail</Button>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="w-64 rounded-lg shadow-xl flex flex-col items-center gap-2 pb-2">
                <img
                  src={require("../../assets/spesies.png")}
                  alt="kupu-kupu"
                  width="256"
                  className="rounded-lg"
                />
                <h3 className="font-semibold">Nama kupu-kupu</h3>
                <p>Famili</p>
                <Button>Detail</Button>
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-64">
        <Button>Muat lebih banyak</Button>

          </div>
        </div>
      </section>
    </div>
  );
}
