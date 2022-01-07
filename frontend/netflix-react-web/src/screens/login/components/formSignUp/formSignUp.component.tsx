import react, { useState, useCallback, useEffect, useMemo } from "react";
import InputText from "../../../../components/inputs/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";
import * as yup from "yup";
import { ErrorMessage } from "../form/form.types";
import { ErrorDescription } from "./form.styled";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../../store/user/user.slice";
import { useLocation, useNavigate } from "react-router";
import {
  isAuthenticated,
  isLoading,
} from "../../../../store/user/user.selectors";
import store from "../../../../store/store/store";

const errorInitial = "";

export default function FormSignUp({ setIsloginPage }: any) {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(errorInitial);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isUserLoading = useSelector(isLoading);
  const isUserAuthenticated = useSelector(isAuthenticated);

  const buttonDescription = useMemo(
    () => (isUserLoading ? "Carregando..." : "Criar Usuário"),
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

  const validation = useCallback(async () => {
    const schema = yup.object().shape({
      name: yup.string().required(ErrorMessage.Required),
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
      await dispatch(userActions.signUp(data));
      const newState = store.getState();
      console.log(newState, "newState");
      setError(newState.user.error);
    }
  }, [validation, data]);

  return (
    <>
      <InputText
        type={"text"}
        placeholder={"Nome"}
        name={"name"}
        onChange={handleChange}
      />
      <InputText
        type={"text"}
        placeholder={"E-mail"}
        name={"email"}
        onChange={handleChange}
      />
      <InputText
        type={"password"}
        placeholder={"Senha"}
        name={"password"}
        onChange={handleChange}
      />
      <ErrorDescription>{error}</ErrorDescription>
      <Button
        disabled={isUserLoading ? true : false}
        primary
        onClick={isUserLoading ? "" : onSubmit}
      >
        {buttonDescription}
      </Button>
      <a
        onClick={() => setIsloginPage(true)}
        style={{ color: "red", cursor: "pointer" }}
      >
        Voltar ao login
      </a>
    </>
  );
}
