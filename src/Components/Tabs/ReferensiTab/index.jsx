import React from "react";

export default function ReferensiTab(props) {
  const { datakupu } = props;
  return (
    <div>
      {datakupu.map((data, idx) => (
        <>
          {data.referensis.length !== 0 ? (
            <>
              {data.referensis?.map((item, idx) => (
                <p key={idx} className="font-medium text-base">
                  [{item.id}] {item.penulis}, "{item.judul}", {item.nama_jurnal}
                  , {item.volume}, {item.tahun}{" "}
                </p>
              ))}
            </>
          ) : (
            <div className="font-semibold">Tidak ada Referensi untuk saat ini</div>
          )}
        </>
      ))}
    </div>
  );
}
