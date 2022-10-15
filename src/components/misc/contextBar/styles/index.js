import styled from "styled-components";

export const Wrapper = styled.div`
  height: 5.2rem;
  width: 100%;
  box-shadow: 0px 2px 9px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Children = styled.div`
  &:first-child {
    margin-left: 4rem;
  }

  &:last-child {
    margin-right: 4rem;
  }

  &:only-child {
    margin-left: 4rem;
  }
`;
