import styled from "styled-components";
import { Colors } from "components/elements/ui/styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(231, 218, 154, 0.39);
`;

export const Header = styled.div`
  height: 4.4rem;
  background-color: ${Colors.lightYellow};
  display: flex;
  align-items: center;
  padding-left: 2.4rem;
  margin-bottom: 4.1rem;
`;

export const FormWrapper = styled.div`
  margin: 0 auto;
  width: 27rem;
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 0.1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;

export const Spinner = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
