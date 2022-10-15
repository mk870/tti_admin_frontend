import styled from "styled-components";
import { Colors } from "components/elements/ui/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6.3rem;
  height: 5.2rem;
  background-color: ${({ isActive, isLogo }) => {
    if (isLogo) return Colors.lightYellow;
    if (isActive) return Colors.white;
    return Colors.darkGrey;
  }};
  border-bottom: ${({ isActive, isLogo }) =>
    !isActive && !isLogo && `1px solid ${Colors.white}`};

  &:hover {
    cursor: pointer;
  }
`;

export const label = styled.div`
  font-size: 1.4rem;
  text-align: center;
`;
