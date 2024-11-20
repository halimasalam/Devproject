import React from "react"
import * as styles from "./index.css"
import { UseFormRegister } from "react-hook-form"

export interface FormValues {
  [prop: string]: string
}

export interface ContactFormField {
  id: string
  placeholder: string
  element: "input" | "textarea"
  elementType: "text" | "email"
}

interface FormFieldProps extends ContactFormField {
  register: UseFormRegister<FormValues>
}

const FormField = (props: FormFieldProps) => {
  return props.element === "input" ? (
    <input
      className={styles.input}
      type={props.elementType}
      name={props.placeholder.toLowerCase()}
      placeholder={props.placeholder}
      {...props.register(props.placeholder.toLowerCase(), {
        required: `${props.placeholder} is required`,
      })}
    />
  ) : (
    <textarea
      className={styles.textarea}
      name={props.placeholder.toLowerCase()}
      placeholder={props.placeholder}
      {...props.register(props.placeholder.toLowerCase(), {
        required: `${props.placeholder} is required`,
      })}
    />
  )
}

export default FormField
