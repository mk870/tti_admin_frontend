import styled from "styled-components";

import { Colors } from "components/elements/ui/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
  /* max-width: 30rem; */
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const Required = styled.span`
  color: ${Colors.red};
`;

export const ErrorMessage = styled.div`
  color: ${Colors.red};
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;
