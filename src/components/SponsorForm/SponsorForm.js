import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FormInput, useForm, EVENT_TYPES, VALIDATION_DISPLAY } from '@compassion-technology/forms'
import { isEmail, isNotEmpty, isNumeric } from '@compassion-technology/validators'

import { getLanguageValue } from '@utils/localization'

import { mockSubmitBeneficiary } from '../../utils/mock/submit'

import styles from './SponsorForm.module.css'

const SponsorForm = () => {
  const history = useHistory()

  const [error, setError] = useState('')

  const { Form, values, isSubmitting, setIsSubmitting } = useForm()
  const { email, id } = values

  const redirect = data => {
    history.push(`/sponsor/${12345678}`, { data })
  }

  const onSubmit = async errors => {
    if (!isSubmitting && !errors) {
      setError('')
      setIsSubmitting(true)
      if (email.includes('pedro')) {
        const { data } = await mockSubmitBeneficiary()
        redirect(data)
      } else {
        // const { errors } = await mockValidateNoEligibleChildren()
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
          label={getLanguageValue('Beneficiary ID')}
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

export default SponsorForm
