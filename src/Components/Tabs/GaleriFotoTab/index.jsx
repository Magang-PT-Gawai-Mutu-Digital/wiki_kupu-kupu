import React from "react";

export default function GaleriFotoTab(props) {
  const { datakupu } = props;
  return (
    <div>
      <section className="body-font py-4">
        <div className="container px-8 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {datakupu.map((images, index) => (
              <>
                {images.butterfly_all_images.length !== 0 ? (
                  <>
                    {images.butterfly_all_images.map((item, index) => (
                      <div className="laptop:w-1/4 tablet:w-1/3 phone:w-1/2 p-4">
                        <img
                          key={index}
                          src={`data:image/jpeg;base64,${item.image}`}
                          alt={item.description}
                          width="248"
                          className="rounded-lg w-full aspect-square"
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="font-semibold">Tidak ada Foto untuk saat ini</div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
