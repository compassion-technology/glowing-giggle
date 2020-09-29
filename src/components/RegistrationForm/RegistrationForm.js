import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { FormInput, useForm, EVENT_TYPES, VALIDATION_DISPLAY } from '@compassion-technology/forms'
import { isEmail, isNotEmpty, isNumeric } from '@compassion-technology/validators'

import { getLanguageValue } from '@utils/localization'

import { mockValidateNoEligibleChildren, mockValidateOK } from '../../utils/mock/validate'

import styles from './RegistrationForm.module.css'

const RegistrationForm = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [error, setError] = useState('')
  const [results, setResults] = useState([])

  const { Form, values, isSubmitting, setIsSubmitting } = useForm()
  const { email, id } = values

  const onSubmit = async errors => {
    if (!isSubmitting && !errors) {
      setError('')
      setIsSubmitting(true)
      if (email.includes('john')) {
        const { data } = await mockValidateOK()
        console.log(data)
        setShouldRedirect(true)
        setResults(data)
      } else {
        const { errors } = await mockValidateNoEligibleChildren()
        setError(errors)
        setShouldRedirect(true)
      }
    }

    setIsSubmitting(false)
  }

  const isValid = email || id > 0

  return shouldRedirect ? (
    results.length > 0 && <Redirect from='/' to={`beneficiaries/${id}`} state={results} noThrow />
  ) : (
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
          <button
            type='submit'
            disabled={!isValid}
            data-submitting={isSubmitting}
            onSubmit={onSubmit}
          >
            {getLanguageValue('Next')}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default RegistrationForm
