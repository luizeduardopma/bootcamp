import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { listBackend } from "../../../store/user/user.selectors";
import ListModalAdd from "./modal/modalAdd.component";
import ListModalRemove from "./modal/modalRemove.component";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userActions } from "../../../store/user/user.slice";
import { ImgPointer } from "./list.styled";

export default function MoviesList() {
  const listFromBackEnd = useSelector(listBackend);
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      listFromBackEnd && listFromBackEnd.length > 0
        ? Math.min(listFromBackEnd && listFromBackEnd.length + 2, 6)
        : 1,
    slidesToScroll:
      listFromBackEnd && listFromBackEnd.length > 0
        ? Math.min(listFromBackEnd && listFromBackEnd.length + 2, 6)
        : 1,
  };

  const handleClick = (movie: any) => (e: any) => {
    navigate(`/movie/${movie.name}/${movie._id}`, { replace: true });
  };

  return (
    <div>
      <Slider {...settings}>
        {listFromBackEnd &&
          listFromBackEnd.map((mov: any, idx: number) => (
            <div key={`movie${idx}`} onClick={handleClick(mov)}>
              <ImgPointer
                style={{ height: "200px" }}
                src={mov.poster}
              ></ImgPointer>
            </div>
          ))}
        <div>
          <ListModalAdd />
        </div>
        {listFromBackEnd && listFromBackEnd.length > 0 && (
          <div>
            <ListModalRemove />
          </div>
        )}
      </Slider>
    </div>
  );
}
