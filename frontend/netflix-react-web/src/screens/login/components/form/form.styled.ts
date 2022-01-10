import styled from "styled-components";

export const ErrorDescription = styled.p`
  text-align: center;
  color: ${(props) => props.theme.palette.core.primary};
  font-weight: bold;
  font-size: 13px;
`;
export const SuccessDescription = styled.p`
  text-align: center;
  color: #7cfc00;
  font-weight: bold;
  font-size: 13px;
`;
