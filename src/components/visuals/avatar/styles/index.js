import { Colors } from "components/elements/ui/styles";
import styled from "styled-components";

export const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => Colors[color]};
  margin: 0 0.5rem;
`;
