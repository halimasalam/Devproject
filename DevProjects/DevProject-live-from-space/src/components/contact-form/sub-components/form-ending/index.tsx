import React from "react"
import * as styles from "./index.css"
import Spinner from "components/common/spinner"

interface FormEndingProps {
  isSubmitting: boolean
  buttonText: string
}

const FormEnding = ({ isSubmitting, buttonText }: FormEndingProps) => {
  return (
    <div className={`${styles.mb30} col-12 text-center`}>
      <input
        type="hidden"
        name="contact_number"
        value={(Math.random() * 100000) | 0}
      />
      <button
        type="submit"
        className={`${styles.submitBtn} btn btn-primary`}
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner /> : buttonText}
      </button>
    </div>
  )
}

export default FormEnding
