import React, { useState } from 'react'

import chat from '@assets/chat.png'
import together from '@assets/together.svg'

import SponsorForm from '@components/SponsorForm'
import { getLanguageValue } from '@utils/localization'

import styles from './Register.module.css'
import { getLanguageId, setCOTLanguageId, SUPPORTED_LANGUAGES } from '../../utils/localization'

const Register = () => {
  const [languageId, setLanguageId] = useState(getLanguageId() || '')

  const languageOnChange = ({ target: { value } }) => {
    // Set local storage first, so when state update causes a re-render, and the new language keys are used

    setCOTLanguageId(value)
    setLanguageId(value)
  }

  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <a href={`${window.location.origin}/register`}>
          <img src={chat} />
        </a>
        <ul className={styles.list}>
          <li>{getLanguageValue('Why?')}</li>
          <li>{getLanguageValue('Privacy & Safety')}</li>
          <li className={styles.optionsContainer}>
            <select onChange={languageOnChange} value={languageId} id='lang'>
              {SUPPORTED_LANGUAGES.map(language => (
                <option key={language.id} value={language.id}>
                  {language.name}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>
      <div className={styles.sectionone}>
        <div className={styles.heading}>
          <h1>
            {getLanguageValue('Stay connected')}
            <br />
            {getLanguageValue('forever.')}
          </h1>
          <h6>
            {getLanguageValue(
              'You no longer have to lose contact with your sponsor after you graduate. If they have registered, you can use this form to find their contact information!'
            )}
          </h6>

          <SponsorForm />
        </div>
        <img src={together} />
      </div>
      <div className={styles.footer}>© 2020 Compassion International. All Rights Reserved.</div>
    </div>
  )
}

export default Register
