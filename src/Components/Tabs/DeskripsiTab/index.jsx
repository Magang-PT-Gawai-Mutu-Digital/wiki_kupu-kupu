import React, { useState } from "react";

export default function DeskripsiTab() {
  const [tabelHeader] = useState([
    "Ordo",
    "Super Famili",
    "Famili",
    "Sub Famili",
    "Genus",
    "Species",
    "Nama Ilmiah",
    "Nama Lain",
  ]);

  const [tabelData] = useState([
    "Lorem Ipsum",

  ]);

  return (
    <div>
      <div>
        <div className="flex">
          <div className="w-10/12">
            <img
              src={require("../../../assets/spesies.png")}
              alt="kupu-kupu"
              width="360"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="inline-block min-w-full p-2">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  {tabelHeader.map((item) => (
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        {item}
                      </th>
                      {tabelData.map((data) => (
                        <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">{data}</td>
                      ))}
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          maiores magni minima quidem iste veniam nulla iusto id consectetur
          debitis numquam, adipisci ad ducimus dignissimos est voluptas nostrum
          nihil vitae!
        </div>
      </div>
    </div>
  );
}
