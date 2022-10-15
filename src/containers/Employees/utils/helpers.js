import { isEmpty } from "lodash";

import { Toast } from "components/notifications";

export const onValidate = ({
  firstName,
  lastName,
  sex,
  dateOfBirth,
  idNumber,
  startDate,
  employeeType,
}) => {
  const errors = {};
  if (isEmpty(firstName)) {
    errors.firstName = "first name missing";
  } else if (isEmpty(lastName)) {
    errors.lastName = "last name missing";
  } else if (isEmpty(sex)) {
    errors.sex = "sex missing";
  } else if (isEmpty(dateOfBirth)) {
    errors.dateOfBirth = "date of birth missing";
  } else if (isEmpty(idNumber)) {
    errors.idNumber = "id number missing";
  } else if (isEmpty(startDate)) {
    errors.startDate = "start date missing";
  } else if (isEmpty(employeeType)) {
    errors.employeeType = "employee type missing";
  }

  if (!isEmpty(errors)) {
    Toast({ message: "There are missing fields 🤯", type: "error" });
  }
  return errors;
};
