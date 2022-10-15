import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useParams } from "react-router-dom";

import { Fieldset } from "components/form/fieldset";
import { Button } from "components/elements/button";

import { formDefinition } from "./utils/formDefinition";
import { employeeObject } from "../utils/employeeObject";
import * as styled from "./styles";

export const AddEmpoyee = (props) => {
  const [employee, setEmployee] = useState({});

  const params = useParams();
  const {
    onValidate,
    onToggleOpenModal,
    onSave,
    onFetchEmployee,
    onEditEmployee,
  } = props;

  const handleFetchEmployee = () => {
    if (params.id) {
      onFetchEmployee(params.id).then((response) => {
        setEmployee(response);
      });
    }
  };

  useEffect(() => handleFetchEmployee(), [params.id]);

  const handleSave = (values, { setSubmitting, resetForm }) => {
    if (employee.id) {
      onEditEmployee(employee.id, values)
        .then(() => setSubmitting(false))
        .catch(() => setSubmitting(false));
    } else {
      onSave(values)
        .then(() => {
          setSubmitting(false);
          resetForm({ values: "" });
        })
        .catch(() => setSubmitting(false));
    }
  };

  return (
    <styled.Wrapper>
      <styled.Header>Add employee</styled.Header>
      <Formik
        initialValues={employeeObject(employee)}
        validate={onValidate}
        onSubmit={handleSave}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize={true}
      >
        {({
          errors,
          touched,
          setFieldValue,
          values: {
            firstName,
            lastName,
            sex,
            dateOfBirth,
            idNumber,
            startDate,
            employeeType,
          },
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <>
            <styled.FormWrapper>
              <Fieldset
                context={formDefinition.firstName}
                onChange={handleChange}
                value={firstName}
                errors={touched.firstName && errors.firstName}
              />
              <Fieldset
                context={formDefinition.lastName}
                onChange={handleChange}
                value={lastName}
                errors={touched.lastName && errors.lastName}
              />
              <Fieldset
                context={formDefinition.sex}
                value={sex}
                errors={touched.sex && errors.sex}
                onChange={(option) => {
                  setFieldValue("sex", option);
                }}
              />
              <Fieldset
                context={formDefinition.dateOfBirth}
                onChange={handleChange}
                value={dateOfBirth}
                errors={touched.dateOfBirth && errors.dateOfBirth}
              />
              <Fieldset
                context={formDefinition.idNumber}
                onChange={handleChange}
                value={idNumber}
                errors={touched.idNumber && errors.idNumber}
              />
              <Fieldset
                context={formDefinition.startDate}
                onChange={handleChange}
                value={startDate}
                errors={touched.startDate && errors.startDate}
              />
              <Fieldset
                context={formDefinition.employeeType}
                value={employeeType}
                errors={touched.employeeType && errors.employeeType}
                onChange={(option) => {
                  setFieldValue("employeeType", option);
                }}
              />
            </styled.FormWrapper>
            <styled.Actions>
              <Button
                btnColor="lightGrey"
                color="white"
                onClick={onToggleOpenModal}
                type="submit"
              >
                Cancel
              </Button>

              <Button
                btnColor="lightBlue"
                color="white"
                onClick={handleSubmit}
                type="submit"
                disabled={isSubmitting}
              >
                Save
              </Button>
            </styled.Actions>
          </>
        )}
      </Formik>
    </styled.Wrapper>
  );
};
