import react, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import { GridNavbar } from "./home.styled";
import Carousel from "./mainCarousel/carousel.component";
import Navbar from "./navbar/navbar.component";
import MoviesList from "./list/list.component";
import SecondaryCarousel from "./secondaryCarousel/secondaryCarousel.component";

export default function Home() {
  return (
    <>
      <Container>
        <Grid container justifyContent={"center"}>
          <div style={{ maxWidth: "70vw" }}>
            <GridNavbar style={{ marginBottom: "50px" }} item xs={12}>
              <Navbar home />
            </GridNavbar>
            <Grid item xs={12}>
              <Carousel />
            </Grid>
            <h5 style={{ color: "white", marginTop: "70px" }}>Minha lista</h5>
            <MoviesList />
            <h5 style={{ color: "white" }}>Filmes</h5>
            <SecondaryCarousel MovieOrTV="movie" />
            <h5 style={{ color: "white" }}>Séries</h5>
            <SecondaryCarousel MovieOrTV="tv" />
          </div>
        </Grid>
      </Container>
    </>
  );
}
