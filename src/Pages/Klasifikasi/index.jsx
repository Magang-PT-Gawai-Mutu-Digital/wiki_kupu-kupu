import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import { getKlasifikasiKupuById } from "../../GraphQL/Query";

export default function Klasifikasi() {
  const { id } = useParams();
  const [dataKupu, setDataKupu] = useState([]);
  const { data: kupuById } = useQuery(getKlasifikasiKupuById, {
    variables: { id_famili: id },
  });

  console.log(dataKupu);

  useEffect(() => {
    if (kupuById) {
      setDataKupu(kupuById?.famili);
    }
  }, [kupuById]);

  return (
    <div>
      {dataKupu?.map((dataKupu, index) => (
        <section className="body-font py-4">
          <div className="container px-8 py-4 mx-auto">
            <div className="flex w-full mb-4 flex-wrap">
              <h1 className="phone:text-3xl text-2xl uppercase font-medium title-font laptop:w-1/3 laptop:mb-0 mb-4">
                Famili {dataKupu.name}
              </h1>
              <p className="laptop:pl-6 laptop:w-2/3 mx-auto leading-relaxed text-base">
                {dataKupu.description}
              </p>
            </div>
            <>
              <div className="flex flex-wrap -mx-4 mb-4 phone:pr-10">
                <div className="w-full text-center phone:p-2 px-4">
                  <h1 className="title-font uppercase font-bold text-3xl">
                    Species
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap -m-4">
                {dataKupu.genera.map((item) => (
                  <>
                    {item.species?.map((spesies, index) => (
                      <div className="laptop:w-1/4 phone:w-1/2 p-4">
                        <div className="w-64 rounded-lg shadow-xl flex flex-col items-center gap-2 pb-2 transform duration-700 ease-in-out hover:-translate-y-1 hover:scale-110" >
                          <img
                            key={index}
                            src={`data:image/jpeg;base64,${spesies.thumbnail}`}
                            alt="kupu-kupu"
                            width="256"
                            className="rounded-lg"
                          />
                          <h3 className="font-semibold">
                            {spesies.binomial_name}
                          </h3>
                          <Link
                            to={`/detail/${spesies.id}`}
                            key={index}
                            state={{ spesies }}
                            onClick={spesies.id}
                            className="w-full flex justify-center items-center"
                          >
                            <Button>Detail</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </>
          </div>
        </section>
      ))}
    </div>
  );
}
