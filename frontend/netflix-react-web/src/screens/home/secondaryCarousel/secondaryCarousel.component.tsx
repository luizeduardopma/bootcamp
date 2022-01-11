import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { moviesBackend } from "../../../store/user/user.selectors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImgPointer } from "../list/list.styled";

export default function SecondaryCarousel(props: any) {
  const moviesFromBackEnd = useSelector(moviesBackend);
  const navigate = useNavigate();
  const MovieOrTV = props.MovieOrTV;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      MovieOrTV === "tv"
        ? 4
        : moviesFromBackEnd.data && moviesFromBackEnd.data.length > 0
        ? Math.min(
            moviesFromBackEnd.data && moviesFromBackEnd.data.length + 2,
            6
          )
        : 1,
    slidesToScroll:
      MovieOrTV === "tv"
        ? 4
        : moviesFromBackEnd.data && moviesFromBackEnd.data.length > 0
        ? Math.min(
            moviesFromBackEnd.data && moviesFromBackEnd.data.length + 2,
            6
          )
        : 1,
  };

  const handleClick = (movie: any) => (e: any) => {
    navigate(`/movie/${movie.name}/${movie._id}`, { replace: true });
  };

  return (
    <div>
      <Slider {...settings}>
        {moviesFromBackEnd.data &&
          moviesFromBackEnd.data.map((info: any, idx: number) => {
            if (MovieOrTV === info.media_type) {
              return (
                <div key={`movie${idx}`} onClick={handleClick(info)}>
                  <ImgPointer
                    style={{ height: "200px" }}
                    src={info.poster}
                  ></ImgPointer>
                </div>
              );
            }
          })}
      </Slider>
    </div>
  );
}
