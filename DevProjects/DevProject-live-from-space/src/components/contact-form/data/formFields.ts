import { ContactFormField } from "components/common/form-field"

const formFields: ContactFormField[] = [
  {
    id: "name",
    placeholder: "Name",
    element: "input",
    elementType: "text",
  },
  {
    id: "email",
    placeholder: "Email",
    element: "input",
    elementType: "email",
  },
  {
    id: "subject",
    placeholder: "Subject",
    element: "input",
    elementType: "text",
  },
  {
    id: "message",
    placeholder: "Message",
    element: "textarea",
    elementType: null,
  },
]

export default formFields
