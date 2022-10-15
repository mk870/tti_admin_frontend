import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Button } from "components/elements/button";
import { SideMenu } from "components/overlay/sideModal";
import { ContextBar } from "components/misc/contextBar";

import {
  addEmployee,
  fetchEmployees,
  deleteEmployee,
  fetchEmployee,
  editEmployee,
} from "./actions";
import { AddEmpoyee } from "./addEmployee";
import { onValidate } from "./utils/helpers";
import { EmployeesScene } from "./scene/ui/employeesScene";
import { getParamsAsJson } from "./utils/employeeAsJson";

const EmployeesComponent = (props) => {
  const navigateTo = useNavigate();

  const {
    handleAddEmployee,
    handleFetchEmployees,
    handleDeleteEmployee,
    handleFetchEmployee,
    handleEditEmployee,
  } = props;

  const [employees, setEmployees] = useState([]);
  const [pagination, setPagination] = useState({ page: 1 });

  useEffect(() => {
    handleFetchEmployees().then((response) => {
      setEmployees(response.data);
      setPagination(response.pagination);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = (params) => {
    return handleFetchEmployees(params).then((response) => {
      setEmployees(response.data);
      setPagination(response.pagination);
    });
  };

  const handleToggleModal = () => navigateTo("/employees");

  const onAddEmployee = (params) => {
    params = getParamsAsJson(params);

    return handleAddEmployee(params).then((employee) => {
      setEmployees([employee, ...employees]);
      setPagination({ ...pagination, total_count: pagination.total_count + 1 });
    });
  };

  const onEditEmployee = (id, params) => {
    params = getParamsAsJson(params);

    return handleEditEmployee(id, params).then((response) => {
      const updatedEmployees = employees.map((employee) => {
        if (employee.id === id) {
          return response;
        }
        return employee;
      });

      setEmployees(updatedEmployees);
    });
  };

  const onDelete = (id) => {
    handleDeleteEmployee(id).then(() => {
      const newEmployees = employees.filter((employee) => employee.id !== id);
      setEmployees(newEmployees);
      setPagination({ ...pagination, total_count: pagination.total_count - 1 });
    });
  };

  const onEdit = (id) => navigateTo(`/employees/edit/${id}`);

  const addEmployeeButton = (
    <Button color="white" onClick={() => navigateTo("/employees/add")}>
      Add employee
    </Button>
  );

  return (
    <>
      <ContextBar
        renderLeftChildren="Employees"
        renderRightChildren={addEmployeeButton}
      />

      <Routes>
        {["add", "edit/:id"].map((path) => (
          <Route
            exact
            path={path}
            element={
              <SideMenu>
                <AddEmpoyee
                  onToggleOpenModal={handleToggleModal}
                  onSave={onAddEmployee}
                  onEditEmployee={onEditEmployee}
                  onValidate={onValidate}
                  onFetchEmployee={handleFetchEmployee}
                />
              </SideMenu>
            }
          />
        ))}
      </Routes>

      <EmployeesScene
        employees={employees}
        onSearch={onSearch}
        pagination={pagination}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </>
  );
};

EmployeesComponent.propTypes = {
  handleAddEmployee: PropTypes.func,
  handleFetchEmployees: PropTypes.func,
  handleDeleteEmployee: PropTypes.func,
  handleFetchEmployee: PropTypes.func,
  handleEditEmployee: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    handleAddEmployee: (params) => dispatch(addEmployee(params)),
    handleFetchEmployees: (params) => dispatch(fetchEmployees(params)),
    handleDeleteEmployee: (id) => dispatch(deleteEmployee(id)),
    handleFetchEmployee: (id) => dispatch(fetchEmployee(id)),
    handleEditEmployee: (id, params) => dispatch(editEmployee(id, params)),
  };
}

export const Employees = connect(null, mapDispatchToProps)(EmployeesComponent);
