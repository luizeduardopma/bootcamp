import styled, { css } from "styled-components";

const Primary = css`
  color: ${(props) => props.theme.palette.typography.primary};
  background: ${(props) => props.theme.palette.core.primary};
`;

const Hover = css`
  &:hover {
    background: ${(props) => props.theme.palette.core.primaryHover};
  }
`;

const Button = styled.a<any>`
  width: 100%;
  margin: 1rem 0;
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 0;
  color: ${(props) => props.theme.palette.typography.primary};
  background: ${(props) => props.theme.palette.core.baseBackground};
  transition: ${(props) => props.theme.animation.primary};
  border-radius: ${(props) => props.theme.border.radius["5"]};
  text-align: center;

  ${(props) => props.primary && Primary}
  ${Hover}
`;

export default Button;
