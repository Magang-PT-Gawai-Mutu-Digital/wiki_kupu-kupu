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
                src={`data:image/jpeg;base64,${data.image}`}
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
                        {data.nama_ilmiah.spesy.genus.sub_famili.famili.name}
                      </td>
                    </tr>
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        Sub Famili
                      </th>
                      <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">
                        {data.nama_ilmiah.spesy.genus.sub_famili.name}
                      </td>
                    </tr>
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        Genus
                      </th>
                      <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">
                        {data.nama_ilmiah.spesy.genus.name}
                      </td>
                    </tr>
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        Spesies
                      </th>
                      <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">
                        {data.nama_ilmiah.spesy.name}
                      </td>
                    </tr>
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        Nama Ilmiah
                      </th>
                      <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">
                        {data.nama_ilmiah.name}
                      </td>
                    </tr>
                    <tr className="border-collapse border">
                      <th className="w-1/4 text-base font-medium bg-primary-lightGray px-2 py-2 text-left">
                        Nama Umum
                      </th>
                      <td className="w-1/2 text-base font-medium bg-primary-white px-2 py-2 text-left">
                        {data.name}
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
