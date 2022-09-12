import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { getKlasifikasiKupu } from "../../GraphQL/Query";

export default function Klasifikasi() {
  const [dataKupu, setDataKupu] = useState([]);
  const { data: dataKlasifikasi } = useQuery(getKlasifikasiKupu);

  console.log(dataKupu);

  useEffect(() => {
    if (dataKlasifikasi) {
      setDataKupu(dataKlasifikasi?.nama_umum);
    }
  }, [dataKlasifikasi]);

  return (
    <div>
      <section className="body-font py-4">
        <div className="container px-8 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {dataKupu?.map((dataKupu, index) => (
              <div className="lg:w-1/4 sm:w-1/2 p-4">
                <div className="w-64 rounded-lg shadow-xl flex flex-col items-center gap-2 pb-2">
                  <img
                    key={index}
                    src={`data:image/jpeg;base64,${dataKupu.image}`}
                    alt="kupu-kupu"
                    width="256"
                    className="rounded-lg"
                  />
                  <h3 className="font-semibold">{dataKupu.nama_ilmiah.name}</h3>

                  <p>{dataKupu.nama_ilmiah.spesy.genus.sub_famili.famili.name}</p>

                  <Link
                    to={`/detail/${dataKupu.id}`}
                    key={index}
                    state={{dataKupu}}
                    onClick={dataKupu.id}
                    className="w-full flex justify-center items-center"
                  >
                    <Button>Detail</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
