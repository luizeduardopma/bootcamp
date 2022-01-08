import styled from "styled-components";
import { AppBar } from "@mui/material";

export const NewAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.core.secondary} !important;
  color: black;
`;
export const Logo = styled.img`
  height: 40px;
`;
