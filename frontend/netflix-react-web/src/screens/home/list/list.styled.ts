import styled from "styled-components";
import { AppBar } from "@mui/material";

export const MovieEmptyAdd = styled.div`
  border: 1px solid white;
  height: 200px;
  width: 133px;
  color: white;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: grey;
    cursor: pointer;
  }
`;

export const MovieEmptyRemove = styled.div`
  border: 1px solid red;
  height: 200px;
  width: 133px;
  color: red;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: grey;
    cursor: pointer;
  }
`;
export const Logo = styled.img`
  height: 40px;
`;

export const ImgPointer = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
