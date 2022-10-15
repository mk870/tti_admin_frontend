import styled from "styled-components";

import { Colors } from "components/elements/ui/styles";

export const Wrapper = styled.div`
  width: 34rem;
  height: calc(100% - 5.3rem);
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  background-color: ${Colors.white};
`;
