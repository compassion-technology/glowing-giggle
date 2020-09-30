import React, { useState } from 'react'

import skippy from '@assets/skippy.png'
import whatsappdemo from '@assets/whatsappdemo.png'
import translate from '@assets/translate.svg'
import message from '@assets/message.svg'
import moderate from '@assets/moderate.svg'
import whatsapp from '@assets/whatsapp_transparent.png'

import BeneficiaryForm from '@components/BeneficiaryForm'
import { getLanguageValue } from '@utils/localization'

import styles from './Home.module.css'
import { getLanguageId, setCOTLanguageId, SUPPORTED_LANGUAGES } from '../../utils/localization'

const Home = () => {
  const [languageId, setLanguageId] = useState(getLanguageId() || '')

  const languageOnChange = ({ target: { value } }) => {
    // Set local storage first, so when state update causes a re-render, and the new language keys are used

    setCOTLanguageId(value)
    setLanguageId(value)
  }

  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <a href={window.location.origin}>
          <img src={skippy} className={styles.skippy} />
        </a>
        <ul className={styles.list}>
          <li>Why WhatsApp?</li>
          <li>Privacy & Safety</li>
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
            Stay connected,
            <br />
            forever. <img src={whatsapp} className={styles.whatsapp} />
          </h1>
          <h6>
            Compassion moderated <b className={styles.bold}>WhatsApp</b> is a simple way to stay
            connected with your sponsor child even after they graduate.
          </h6>

          <BeneficiaryForm />
        </div>
        <img src={whatsappdemo} className={styles.world} />
      </div>
      <div className={styles.sectiontwo}>
        <div className={styles.whatsappheader}>
          <h1>Connect safely on WhatsApp</h1>
        </div>
        <div className={styles.methods}>
          <div>
            <img src={message} />
            <h4>{getLanguageValue('Popular Chat App')}</h4>
            <h6>
              Ranked #4 in Social Networking on the Apple App Store, WhatsApp is a reliable
              messaging system for you and your sponsor child.
            </h6>
          </div>
          <div>
            <img src={moderate} />
            <h4>{getLanguageValue('Compassion Moderated Chats')}</h4>
            <h6>
              We make sure your safety and the child's safety is our priority. All chats are
              thoroughly moderated for security.
            </h6>
          </div>
          <div>
            <img src={translate} />
            <h4>{getLanguageValue('Automatic Translation')}</h4>
            <h6>
              Our moderation system translates your language to the language of your sponsor child
              and vice versa for your convenience.
            </h6>
          </div>
        </div>
      </div>
      <div className={styles.footer}>© 2020 Compassion International. All Rights Reserved.</div>
    </div>
  )
}

export default Home
