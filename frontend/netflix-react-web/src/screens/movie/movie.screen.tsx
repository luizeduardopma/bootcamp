import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid } from "@mui/material";
import Navbar from "../home/navbar/navbar.component";
import { listBackend, movieBackend } from "../../store/user/user.selectors";
import { userActions } from "../../store/user/user.slice";
import Button from "@mui/material/Button";

export default function Movie() {
  const dispatch = useDispatch();

  const movieFromBackend = useSelector(movieBackend);
  const listFromBackend = useSelector(listBackend);

  const [isAddedToList, setIsAddedToList] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/")[3];
    dispatch(userActions.getMovie(id));
  }, []);

  useEffect(() => {
    if (listFromBackend) {
      const result = listFromBackend.find(
        (mov: any) => mov._id === movieFromBackend._id
      );
      setIsAddedToList(!!result);
    }
  }, [movieFromBackend, listFromBackend]);

  const handleClick = () => {
    const id = movieFromBackend._id;
    if (isAddedToList) {
      dispatch(userActions.removeList(id));
    } else {
      dispatch(userActions.addList(id));
    }
  };

  return (
    <>
      <Container>
        <Grid container justifyContent={"center"}>
          <div style={{ width: "85vw" }}>
            <Navbar home={false} />
            <Grid item xs={12}>
              <img
                src={movieFromBackend.poster}
                style={{ width: "50%", height: "85vh" }}
                alt="poster"
              />
              <img
                src={movieFromBackend.backdrop}
                style={{ width: "50%", height: "85vh" }}
                alt="backdrop"
              />
            </Grid>
            <Grid item xs={12}>
              <h1 style={{ color: "white", fontWeight: "200" }}>
                {movieFromBackend.name}
              </h1>
            </Grid>
            <Grid item xs={12}>
              <h4
                style={{ color: "white", fontWeight: "200", maxWidth: "30vw" }}
              >
                {movieFromBackend.description}
              </h4>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant={isAddedToList ? "outlined" : "contained"}
                size="small"
                fullWidth
                color="error"
                sx={{ textTransform: "none" }}
                onClick={handleClick}
              >
                {isAddedToList ? "Remover da lista" : "Adicionar à minha lista"}
              </Button>
            </Grid>
          </div>
        </Grid>
      </Container>
    </>
  );
}
