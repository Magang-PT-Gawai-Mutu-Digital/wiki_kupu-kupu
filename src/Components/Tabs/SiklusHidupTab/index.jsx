import React from "react";

export default function SiklusHidupTab(props) {
  const { datakupu } = props;
  return (
    <div>
      <section className="body-font py-4">
        <div className="container px-8 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {datakupu.map((images, index) => (
              <>
                {images.butterfly_images?.map((image, index) => (
                  <div className="laptop:w-1/4 phone:w-1/2 p-4">
                    <img
                      key={index}
                      src={`data:image/jpeg;base64,${image.lifecycle_images}`}
                      alt={image.description}
                      width="248"
                      className="rounded-lg w-full aspect-square"
                    />
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
