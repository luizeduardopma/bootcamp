import { useState, useCallback, useEffect, useMemo } from "react";
import InputText from "../../../../components/inputs/input-text/input-text.component";
import Button from "../../../../components/buttons/button/button.component";
import * as yup from "yup";
import { ErrorMessage } from "../form/form.types";
import { ErrorDescription } from "./form.styled";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../../store/user/user.slice";
import { useNavigate } from "react-router";
import {
  isLoading,
  errorMessageRedux,
} from "../../../../store/user/user.selectors";
import { HomePath } from "../../../home/home.types";

const errorInitial = "";

export default function FormSignUp({ setIsloginPage }: any) {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(errorInitial);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUserLoading = useSelector(isLoading);
  const errorMessageFromRedux = useSelector(errorMessageRedux);

  const buttonDescription = useMemo(
    () => (isUserLoading ? "Carregando..." : "Criar Usuário"),
    [isUserLoading]
  );
  useEffect(() => {
    if (errorMessageFromRedux !== "") {
      setError(errorMessageFromRedux);
    }
  }, [errorMessageFromRedux, error]);

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
  }, [data, setError, resetError]);

  const onSubmit = useCallback(async () => {
    if (await validation()) {
      await dispatch(userActions.signUp(data));
      if (!isUserLoading) {
        navigate(HomePath);
      }
      setIsloginPage(true);
    }
  }, [validation, data]);

  return (
    <>
      <InputText
        type={"text"}
        placeholder={"Nome"}
        name={"name"}
        onChange={handleChange}
        onClick={handleClick}
      />
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
      <Button
        disabled={isUserLoading ? true : false}
        primary
        onClick={isUserLoading ? null : onSubmit}
      >
        {buttonDescription}
      </Button>
      <a
        onClick={() => setIsloginPage(true)}
        href="/#"
        style={{ color: "red", cursor: "pointer" }}
      >
        Voltar ao login
      </a>
    </>
  );
}
