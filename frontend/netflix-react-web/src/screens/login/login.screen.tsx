import react, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { Logo, Wrapper } from "./login.styled";
import logo from "../../assets/icons/logo.svg";
import Form from "./components/form/form.component";
import FormSignUp from "./components/formSignUp/formSignUp.component";

export default function Login() {
  const [isLoginPage, setIsloginPage] = useState(true);
  return (
    <>
      <Container>
        <Wrapper container justifyContent={"center"}>
          <Grid item xs={3}>
            <Grid container justifyContent={"center"}>
              <Logo src={logo} alt={"Netflix Logo"} />
              {isLoginPage ? (
                <Form setIsloginPage={setIsloginPage} />
              ) : (
                <FormSignUp setIsloginPage={setIsloginPage} />
              )}
            </Grid>
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
}
