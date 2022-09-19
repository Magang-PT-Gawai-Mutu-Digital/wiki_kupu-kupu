import React from "react";

export default function DeskripsiTab(props) {
  const { datakupu } = props;

  return (
    <div>
      {datakupu.map((data, index) => (
        <div>
          <div className="flex">
            <div className="w-10/12">
              <img
                src={`data:image/jpeg;base64,${data.thumbnail}`}
                alt="kupu-kupu"
                width="360"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="inline-block min-w-full p-2">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    {/* <> */}
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        Famili
                      </th>
                      <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">
                        {data.genus.famili.name}
                      </td>
                    </tr>
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        Genus
                      </th>
                      <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">
                        {data.genus.genus_name}
                      </td>
                    </tr>
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        Spesies
                      </th>
                      <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">
                        {data.species_name}
                      </td>
                    </tr>
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        Nama Ilmiah
                      </th>
                      <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">
                        {data.binomial_name}
                      </td>
                    </tr>
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        Nama Indonesia
                      </th>
                      <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">
                        {data.indonesian_name}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="my-8">{data.description}</div>
        </div>
      ))}
    </div>
  );
}
