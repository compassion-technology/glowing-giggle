import React, { useState } from 'react'
import { FormInput, useForm, EVENT_TYPES, VALIDATION_DISPLAY } from '@compassion-technology/forms'
import { isEmail, isNotEmpty, isNumeric } from '@compassion-technology/validators'

import { getLanguageValue } from '@utils/localization'

import styles from './RegistrationForm.module.css'
import { mockValidateNoEligibleChildren, mockValidateOK } from '../../utils/mock/validate'

const RegistrationForm = () => {
  const [error, setError] = useState('')
  const { Form, values, isSubmitting, setIsSubmitting } = useForm()
  const { email, id } = values

  const onSubmit = async errors => {
    if (!isSubmitting && !errors) {
      setError('')
      setIsSubmitting(true)

      if (email.includes('john')) {
        const { data } = await mockValidateOK()

        console.log(data)
      } else {
        const { errors } = await mockValidateNoEligibleChildren()

        setError(errors)
      }
    }

    setIsSubmitting(false)
  }

  const isValid = email || id > 0

  return (
    <div className={styles.register}>
      <Form onSubmit={onSubmit} validateOnEvents={[EVENT_TYPES.onBlur]}>
        <FormInput
          type='input'
          name='email'
          label={getLanguageValue('Email Address')}
          validations={[
            { validator: isNotEmpty, message: getLanguageValue('Field is required') },
            { validator: isEmail, message: getLanguageValue('Must be a valid Email') }
          ]}
          validationDisplay={VALIDATION_DISPLAY.errorMessage}
        />

        <FormInput
          type='number'
          name='id'
          label={getLanguageValue('Sponsor ID')}
          validations={[
            { validator: isNotEmpty, message: getLanguageValue('Field is required') },
            { validator: isNumeric, message: getLanguageValue('Must be a number') }
          ]}
          validationDisplay={VALIDATION_DISPLAY.errorMessage}
        />

        <div className={styles.error}>{error}</div>

        <div className={styles.actions}>
          <button type='submit' disabled={!isValid} data-submitting={isSubmitting}>
            {getLanguageValue('Next')}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default RegistrationForm
