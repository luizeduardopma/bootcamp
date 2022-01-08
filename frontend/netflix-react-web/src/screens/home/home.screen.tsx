import react, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import { GridNavbar } from "./home.styled";
import Carousel from "./carousel/carousel.component";
import Navbar from "./navbar/navbar.component";

export default function Home() {
  return (
    <>
      <Container>
        <Grid container justifyContent={"center"}>
          <div style={{ maxWidth: "70vw" }}>
            <GridNavbar style={{ marginBottom: "50px" }} item xs={12}>
              <Navbar />
            </GridNavbar>
            <Grid item xs={12}>
              <Carousel />
            </Grid>
          </div>
        </Grid>
      </Container>
    </>
  );
}
