import { isEmpty } from "lodash";

const parseSelect = (value) => {
  if (isEmpty(value)) {
    return "";
  }

  return { label: value, value };
};

export const employeeObject = (object) => ({
  firstName: object.first_name || "",
  lastName: object.last_name || "",
  sex: parseSelect(object.sex),
  dateOfBirth: object.dob || "",
  idNumber: object.id_number || "",
  startDate: object.start_date || "",
  employeeType: parseSelect(object.employee_type),
});
