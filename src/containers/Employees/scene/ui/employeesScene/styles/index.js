import styled from "styled-components";

import { Colors } from "components/elements/ui/styles";
import { Fieldset as FieldsetBase } from "components/form/fieldset";
import { Button as ButtonBase } from "components/elements/button";

export const Wrapper = styled.div`
  height: calc(100vh - 8rem);
  margin: 0 auto;
  position: relative;
`;

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  height: 3.7rem;
`;

export const Fieldset = styled(FieldsetBase)`
  width: 60rem;
  height: 100%;
  border-radius: 6rem;
  margin-bottom: 0;
`;

export const Button = styled(ButtonBase)`
  width: auto;
  margin-left: 2rem;
  border-radius: 0.7rem;
`;

export const Pages = styled.div`
  display: inline-block;
  margin: 0 2rem;
`;

export const Count = styled.div`
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

export const EmployeesWrapper = styled.div`
  width: 96rem;
  margin: 0 auto;
  position: relative;
  height: 100%;
  padding-bottom: 10rem;
`;

export const EmployeesList = styled.div`
  overflow-y: auto;
  height: 100%;
  padding-bottom: 5rem;
`;

export const EmployeeWrapper = styled.div`
  height: 6rem;
  border: 1px solid ${Colors.lightBlue};
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

export const Item = styled.div`
  border-right: 1px solid ${Colors.lightBlue};
  border-left: 1px solid ${Colors.lightBlue};
  flex: 1;
  height: 100%;

  &:first-of-type {
    border-right: none;
    background: red;
  }
`;

export const ItemLabel = styled.div`
  height: 50%;
  padding: 0.5rem;
  border-bottom: 1px solid ${Colors.lightBlue};
  text-align: center;
  font-weight: 600;
`;

export const ItemValue = styled.div`
  height: 50%;
  padding: 0.5rem;
  text-align: center;
`;

export const ActionsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Actions = styled.div`
  margin: 0 auto;
  width: 33rem;
  text-align: center;
  background: ${Colors.white};
`;

export const EmployeeButton = styled(ButtonBase)`
  width: 7.8rem;
  height: 1.9rem;
`;
