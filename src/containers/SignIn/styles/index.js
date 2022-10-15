import styled from "styled-components";

import { Colors } from "components/elements/ui/styles";

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 150rem;
`;

export const leftBottomMixin = `
    bottom: 5rem;
    left: 5rem;
`;

export const rightTopMixin = `
    top: 5rem;
    right: 5rem;
`;

export const Circle = styled.div`
  width: 16.2rem;
  height: 16.2rem;
  border-radius: 50%;
  position: absolute;
  background-color: ${({ color }) => Colors[color]};

  ${({ rightTop }) => (rightTop ? rightTopMixin : leftBottomMixin)}
`;

export const CenterContainer = styled.div`
  background: ${Colors.bgColor};
  width: 120.8rem;
  height: 70rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  border-radius: 0.5rem;
  border: 1px solid ${Colors.lightYellow};
  width: 47.8rem;
  padding: 2.3rem;
  background: ${Colors.white};
`;

export const InputsWrapper = styled.div`
  width: 30rem;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.7rem;
`;
