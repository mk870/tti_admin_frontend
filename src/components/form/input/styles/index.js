import styled from "styled-components";

import { Colors } from "components/elements/ui/styles";

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  outline: none;
  border: ${({ errors }) =>
    errors ? `1px solid ${Colors.red}` : `1px solid ${Colors.outline}`};
  border-radius: 0.5rem;
  padding: 0 0.9rem;

  &:focus {
    border: 1px solid ${Colors.lightYellow};
  }
`;
