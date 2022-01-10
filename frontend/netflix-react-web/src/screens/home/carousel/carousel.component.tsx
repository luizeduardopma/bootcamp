import React from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { moviesBackend } from "../../../store/user/user.selectors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userActions } from "../../../store/user/user.slice";
import { ImgPointer } from "../list/list.styled";

export default function Carousel() {
  const moviesFromBackEnd = useSelector(moviesBackend);

  const navigate = useNavigate();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  const handleClick = (movie: any) => (e: any) => {
    navigate(`movie/${movie.name}/${movie._id}`);
  };

  return (
    <div>
      <Slider {...settings}>
        {moviesFromBackEnd &&
          moviesFromBackEnd.data &&
          moviesFromBackEnd.data.map((mov: any, idx: number) => (
            <div key={`movie${idx}`} onClick={handleClick(mov)}>
              <ImgPointer
                style={{ height: "400px" }}
                src={mov.poster}
              ></ImgPointer>
            </div>
          ))}
      </Slider>
    </div>
  );
}
