import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ images }) {
  console.log(images)
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div class="max-w-full mx-auto shadow-xl">
        <div
          id="default-carousel"
          class="relative"
          data-carousel="static"
        >
          <Slider {...settings}>
            {images.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
