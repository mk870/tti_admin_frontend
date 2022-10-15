import styled from "styled-components";
import { darken } from "polished";
import { Colors } from "components/elements/ui/styles";

export const Button = styled.button`
  color: ${({ color }) => color && Colors[color]};
  background-color: ${({ btnColor }) =>
    btnColor ? Colors[btnColor] : Colors.lightBlue};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: 12.7rem;
  height: 3.1rem;
  border: none;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: ${({ btnColor }) =>
      darken(0.25, btnColor || Colors.lightBlue)};
  }
`;
