import React, { useState } from 'react'
import { FormInput, useForm, EVENT_TYPES, VALIDATION_DISPLAY } from '@compassion-technology/forms'
import { isEmail, isNotEmpty, isNumeric } from '@compassion-technology/validators'

import { getLanguageValue } from '@utils/localization'

import styles from './Register.module.css'

const Register = () => {
  const [error, setError] = useState('')
  const { Form, values, isSubmitting, setIsSubmitting } = useForm()
  const { email, id } = values

  const onSubmit = async errors => {
    if (!isSubmitting && !errors) {
      setError('')
      setIsSubmitting(true)

      // send request
    }

    setIsSubmitting(false)
  }

  const isValid = email || id > 0

  return (
    <div className={styles.register}>
      <Form onSubmit={onSubmit} validateOnEvents={[EVENT_TYPES.onBlur]}>
        <p>{getLanguageValue('Please sign up to Compassion After Grad')}</p>

        <FormInput
          type='input'
          name='Email'
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
      <Footer />
    </div>
  )
}

export default Register
