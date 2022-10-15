import React, { useState } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";

import { Avatar } from "components/visuals/avatar";
import { Button } from "components/elements/button";

import { formDefinition } from "containers/Employees/utils/formDefinition";
import * as styled from "./styles";

export const EmployeesScene = (props) => {
  const { employees, onEdit, onDelete, onSearch, pagination } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const getInitials = (employee) =>
    `${employee?.first_name[0]}${employee?.last_name[0]}`;

  return (
    <styled.Wrapper>
      <styled.EmployeesWrapper>
        <styled.SearchForm>
          <styled.Fieldset
            onChange={(event) => setSearchTerm(event.target.value)}
            context={formDefinition.search}
            value={searchTerm}
          />
          <styled.Button
            color="white"
            onClick={() => onSearch({ first_name: searchTerm })}
          >
            Search
          </styled.Button>
        </styled.SearchForm>
        <styled.Count>{pagination.total_count} employees</styled.Count>

        <styled.EmployeesList>
          {employees.map((employee) => (
            <styled.EmployeeWrapper key={employee.id}>
              <Avatar color="lightYellow" initials={getInitials(employee)} />
              <styled.Item>
                <styled.ItemLabel>first name</styled.ItemLabel>
                <styled.ItemValue>{employee.first_name}</styled.ItemValue>
              </styled.Item>

              <styled.Item>
                <styled.ItemLabel>last name</styled.ItemLabel>
                <styled.ItemValue>{employee.last_name}</styled.ItemValue>
              </styled.Item>

              <styled.Item>
                <styled.ItemLabel>sex</styled.ItemLabel>
                <styled.ItemValue>{employee.sex}</styled.ItemValue>
              </styled.Item>

              <styled.Item>
                <styled.ItemLabel>start date</styled.ItemLabel>
                <styled.ItemValue>{employee.start_date}</styled.ItemValue>
              </styled.Item>

              <styled.Item>
                <styled.ItemLabel>type</styled.ItemLabel>
                <styled.ItemValue>{employee.employee_type}</styled.ItemValue>
              </styled.Item>

              <styled.Item>
                <styled.ItemLabel>id number</styled.ItemLabel>
                <styled.ItemValue>{employee.id_number}</styled.ItemValue>
              </styled.Item>

              <styled.Item>
                <styled.ItemLabel>
                  <styled.EmployeeButton
                    color="white"
                    onClick={() => onEdit(employee.id)}
                  >
                    Edit
                  </styled.EmployeeButton>
                </styled.ItemLabel>
                <styled.ItemValue>
                  <styled.EmployeeButton
                    btnColor="red"
                    color="white"
                    onClick={() => onDelete(employee.id)}
                  >
                    Delete
                  </styled.EmployeeButton>
                </styled.ItemValue>
              </styled.Item>
            </styled.EmployeeWrapper>
          ))}
        </styled.EmployeesList>
        {Boolean(pagination.pages) && (
          <styled.ActionsWrapper>
            <styled.Actions>
              <Button
                disabled={!pagination.has_prev}
                color="white"
                onClick={() => onSearch({ page: pagination.page - 1 })}
              >
                Back
              </Button>

              <styled.Pages>
                {pagination.page} / {pagination.pages}
              </styled.Pages>
              <Button
                color="white"
                disabled={!pagination.has_next}
                onClick={() => onSearch({ page: pagination.page + 1 })}
              >
                Next
              </Button>
            </styled.Actions>
          </styled.ActionsWrapper>
        )}
      </styled.EmployeesWrapper>
    </styled.Wrapper>
  );
};

EmployeesScene.propTypes = {
  employees: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onSearch: PropTypes.func,
  pagination: PropTypes.object,
};
