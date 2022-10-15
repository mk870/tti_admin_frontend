export const formDefinition = {
  firstName: {
    id: "firstName",
    type: "text",
    required: true,
    label: "first name",
    placeholder: "Enter first name",
  },
  lastName: {
    id: "lastName",
    type: "text",
    required: true,
    label: "last name",
    placeholder: "Enter last name",
  },
  sex: {
    name: "sex",
    type: "select",
    required: true,
    label: "sex",
    placeholder: "Pick sex",
    options: [
      { value: "male", label: "male" },
      { value: "female", label: "female" },
    ],
  },
  dateOfBirth: {
    id: "dateOfBirth",
    type: "date",
    required: true,
    label: "date of birth",
    placeholder: "Pick date of birth",
  },
  idNumber: {
    id: "idNumber",
    type: "text",
    required: true,
    label: "id number",
    placeholder: "Enter id number",
  },
  startDate: {
    id: "startDate",
    type: "date",
    required: true,
    label: "pick start date",
    placeholder: "Pick date of birth",
  },
  employeeType: {
    name: "employeeType",
    type: "select",
    required: true,
    label: "employee type",
    placeholder: "Pick employee type",
    options: [
      { value: "marshal", label: "marshal" },
      { value: "enforcement", label: "enforcement" },
      { value: "admin", label: "admin" },
    ],
  },
};