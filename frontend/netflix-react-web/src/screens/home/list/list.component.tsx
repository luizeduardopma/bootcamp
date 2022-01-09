import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { listBackend } from "../../../store/user/user.selectors";
import { MovieEmpty } from "./list.styled";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MoviesList() {
  const listFromBackEnd = useSelector(listBackend);
  console.log(listFromBackEnd, "listFromBackEnd");
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: listFromBackEnd ? listFromBackEnd.length + 1 : 1,
    slidesToScroll: listFromBackEnd ? listFromBackEnd.length + 1 : 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {listFromBackEnd &&
          listFromBackEnd.map((mov: any, idx: number) => (
            <div key={`movie${idx}`}>
              <img style={{ height: "200px" }} src={mov.poster}></img>
            </div>
          ))}
        <div>
          <MovieEmpty>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <AddCircleOutlineIcon
                style={{ height: "40px", width: "40px", flexBasis: "100%" }}
              />
              <h5>Adicionar filme</h5>
            </div>
          </MovieEmpty>
        </div>
      </Slider>
    </div>
  );
}
