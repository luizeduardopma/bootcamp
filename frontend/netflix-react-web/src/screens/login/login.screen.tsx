import react from "react";
import { Container, Grid } from "@mui/material";
import { Logo, Wrapper } from "./login.styled";
import logo from "../../assets/icons/logo.svg";
import Form from "./components/form/form.component";

export default function Login() {
  return (
    <>
      <Container>
        <Wrapper container justifyContent={"center"}>
          <Grid item xs={3}>
            <Grid container justifyContent={"center"}>
              <Logo src={logo} alt={"Netflix Logo"} />
              <Form />
            </Grid>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
