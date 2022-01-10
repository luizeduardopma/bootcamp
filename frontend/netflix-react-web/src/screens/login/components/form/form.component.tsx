import react, { useState, useCallback, useEffect, useMemo } from "react";
import InputText from "../../../../components/inputs/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";
import * as yup from "yup";
import { ErrorMessage } from "./form.types";
import { ErrorDescription, SuccessDescription } from "./form.styled";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../../store/user/user.slice";
import { useLocation, useNavigate } from "react-router";
import {
  isAuthenticated,
  isLoading,
  errorMessageRedux,
} from "../../../../store/user/user.selectors";
import { HomePath } from "../../../home/home.types";
import { setInterval } from "timers/promises";

const errorInitial = "";
const successInitial = "";

export default function Form({ setIsloginPage }: any) {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(errorInitial);
  const [success, setSuccess] = useState(successInitial);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isUserLoading = useSelector(isLoading);
  const isUserAuthenticated = useSelector(isAuthenticated);
  const errorMessageFromRedux = useSelector(errorMessageRedux);

  useEffect(() => {
    if (isUserAuthenticated) {
      const to = location.state?.from?.pathname || HomePath;
      navigate(to);
    }
  }, [isUserAuthenticated]);

  useEffect(() => {
    if (errorMessageFromRedux === "Success") {
      setSuccess("Usuário criado com sucesso");
      setTimeout(() => setSuccess(""), 4000);
    } else if (errorMessageFromRedux !== "") {
      setError(errorMessageFromRedux);
    }
  }, [errorMessageFromRedux, error]);

  const buttonDescription = useMemo(
    () => (isUserLoading ? "Carregando..." : "Entrar"),
    [isUserLoading]
  );

  const resetError = useCallback(() => {
    setError(errorInitial);
  }, []);

  const handleChange = useCallback(
    (event: any) =>
      setData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      })),
    [setData]
  );
  const handleClick = () => {
    errorMessageFromRedux !== "" && dispatch(userActions.setError(""));

    setError("");
  };

  const validation = useCallback(async () => {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required(ErrorMessage.Required)
        .email(ErrorMessage.EmailBadFormat),
      password: yup.string().required(ErrorMessage.Required),
    });

    try {
      await schema.validate(data);
      resetError();

      return true;
    } catch (error) {
      // @ts-ignore
      setError(error.errors[0]);
      return false;
    }
  }, [data, setError]);

  const onSubmit = useCallback(async () => {
    if (await validation()) {
      dispatch(userActions.login(data));
      dispatch(userActions.movies());
    }
  }, [validation, data]);

  return (
    <>
      <InputText
        type={"text"}
        placeholder={"E-mail"}
        name={"email"}
        onChange={handleChange}
        onClick={handleClick}
      />
      <InputText
        type={"password"}
        placeholder={"Senha"}
        name={"password"}
        onChange={handleChange}
        onClick={handleClick}
      />
      <ErrorDescription>{error}</ErrorDescription>
      <SuccessDescription>{success}</SuccessDescription>
      <Button
        disabled={isUserLoading ? true : false}
        primary
        onClick={isUserLoading ? "" : onSubmit}
      >
        {buttonDescription}
      </Button>
      <span style={{ color: "white" }}>Não tem uma conta? </span>
      <a
        onClick={() => setIsloginPage(false)}
        style={{ color: "red", cursor: "pointer", marginLeft: "8px" }}
      >
        Cadastre-se
      </a>
    </>
  );
}
