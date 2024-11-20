import React from "react"
import * as styles from "./index.css"
import { FieldErrorsImpl } from "react-hook-form"

export interface FormFieldWrapperProps {
  index: number
  fieldName: string
  children: React.ReactElement
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: string
    }>
  >
}

const FormFieldWrapper = ({
  index,
  fieldName,
  children,
  errors,
}: FormFieldWrapperProps) => {
  const formFieldClasses = [
    "col-md-6 col-12 mb-6",
    "col-md-6 col-12 mb-6",
    "col-md-12 col-12 mb-6",
    "col-12 mb-6",
  ]

  return (
    <div className={`${styles.mb30} ${formFieldClasses[index]}`}>
      {children}
      {errors?.[fieldName.toLowerCase()] && (
        <p className={styles.errorText}>
          {errors[fieldName.toLowerCase()]?.message}
        </p>
      )}
    </div>
  )
}

export default FormFieldWrapper
