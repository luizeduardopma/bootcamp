import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { listBackend } from "../../../store/user/user.selectors";
import { MovieEmpty } from "./list.styled";
import ListModal from "./modal/modal.component";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MoviesList() {
  const listFromBackEnd = useSelector(listBackend);
  console.log(listFromBackEnd, "listFromBackEnd");
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(listFromBackEnd ? listFromBackEnd.length + 1 : 1, 6),
    slidesToScroll: Math.min(
      listFromBackEnd ? listFromBackEnd.length + 1 : 1,
      6
    ),
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
          <ListModal />
        </div>
      </Slider>
    </div>
  );
}
