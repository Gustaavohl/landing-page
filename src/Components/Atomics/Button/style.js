import styled from "styled-components";
import { COLORS } from "../../../common/Colors";

export const Container = styled.main`

  display: flex;
  button {
    cursor: pointer;
    border: none;
    width: 100%;
    height: 48px;
    background: ${(props) => props.background ? `${props.background}` : `${COLORS.Blue}`};
    color: ${(props) => props.color ? `${props.color}` : "WHITE"};
  }
`;

