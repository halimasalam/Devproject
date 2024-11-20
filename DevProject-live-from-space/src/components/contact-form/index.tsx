import React, { useState, useRef } from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"
import emailjs from "@emailjs/browser"
import { graphql } from "gatsby"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import FormField, { FormValues } from "components/common/form-field"
import FormFieldWrapper from "./sub-components/form-field-wrapper"
import FormEnding from "./sub-components/form-ending"
import SectionHeading from "components/common/section-heading"
import FormLottiePlayer from "./sub-components/form-lottie-player"
import formFields from "./data/formFields"

export interface ContactFormProps {
  title: string
  description: string
  buttonText: string
  styleOption?: "main" | "alt"
  hideLottie?: boolean
}

export default function ContactForm(props: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
  })
  const formRef = useRef<HTMLFormElement>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async () => {
    try {
      await onSubmitCallback()
    } catch (error) {
      onSubmitError(error.text)
    } finally {
      setIsSubmitting(false)
    }
  }

  const onSubmitCallback = async () => {
    setIsSubmitting(true)
    await emailjs.sendForm(
      process.env.GATSBY_EMAILJS_SERVICE_ID,
      "contact_form",
      formRef.current,
      process.env.GATSBY_EMAILJS_PUBLIC_KEY
    )
    toast.success("Form submitted successfully!")
    formRef.current.reset()
  }

  const onSubmitError = (text) => {
    console.log(text)
    toast.error("An error occurred. Please try again later.")
  }

  return (
    <>
      <section
        id="get-in-touch"
        className={styles.contactFormSection[props.styleOption || "main"]}
      >
        <div className={props.styleOption !== "alt" ? "container" : null}>
          <div className="row">
            <div
              className={
                props.styleOption !== "alt" ? "offset-lg-2 col-lg-8" : null
              }
            >
              <SectionHeading
                title={props.title}
                description={props.description}
                lottiePlayer={!props.hideLottie ? <FormLottiePlayer /> : null}
              />
              <Fade bottom>
                <div className="contact-form">
                  <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                    <div className={`${styles.mbNe30} row`}>
                      {formFields.map((field, index) => (
                        <FormFieldWrapper
                          key={field.id}
                          index={index}
                          fieldName={field.placeholder}
                          errors={errors}
                        >
                          <FormField register={register} {...field} />
                        </FormFieldWrapper>
                      ))}
                      <FormEnding
                        isSubmitting={isSubmitting}
                        buttonText={props.buttonText}
                      />
                    </div>
                  </form>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export const query = graphql`
  fragment ContactPageFormContent on ContactPageForm {
    id
    title
    description
    buttonText
  }
`
