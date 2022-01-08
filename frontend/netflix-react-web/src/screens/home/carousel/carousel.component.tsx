import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { moviesBackend } from "../../../store/user/user.selectors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const moviesFromBackEnd = useSelector(moviesBackend);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div>
      <Slider {...settings}>
        {moviesFromBackEnd &&
          moviesFromBackEnd.data &&
          moviesFromBackEnd.data.map((mov: any, idx: number) => (
            <div key={`movie${idx}`}>
              <img style={{ height: "400px" }} src={mov.poster}></img>
            </div>
          ))}
      </Slider>
    </div>
  );
}
