export const getParamsAsJson = (object) => ({
  first_name: object.firstName,
  last_name: object.lastName,
  employee_type: object.employeeType?.value,
  id_number: object.idNumber,
  sex: object.sex?.value,
  start_date: object.startDate,
  dob: object.dateOfBirth,
});
