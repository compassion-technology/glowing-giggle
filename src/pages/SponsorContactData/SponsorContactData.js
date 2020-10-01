import React, { useEffect, useState } from 'react'

import hiking from '@assets/hiking.jpg'
import chat from '@assets/chat.png'
import letterImg from '@assets/letter.svg'
import facebookImg from '@assets/facebook.svg'
import skypeImg from '@assets/skype.png'

import styles from './SponsorContactData.module.css'
import { getLanguageValue } from '../../utils/localization'

const SponsorContactData = ({ history, location }) => {
  const [sponsorData] = useState(location.state.data)

  useEffect(() => {
    if (!sponsorData) {
      history.push('/register')
    }
  }, [sponsorData])

  console.log(sponsorData, ' sponsor data')

  const { name, email = '', skype = '', facebook = '', image = '' } = sponsorData

  return (
    <div className={styles.sponsor}>
      <div className={styles.nav}>
        <a href={`${window.location.origin}/register`}>
          <img src={chat} />
        </a>
        <ul className={styles.list}>
          <li>{getLanguageValue('Why?')}</li>
          <li>{getLanguageValue('Privacy & Safety')}</li>
        </ul>
      </div>
      <div className={styles.section2}>
        <img src={image} />
        <div className={styles.info}>
          <h1>{name} wants to keep in contact with you!</h1>
          <h5 className={styles['info-content']}>
            <img src={letterImg} className={styles.icon} />
            <span>{email}</span>
          </h5>
          <h5 className={styles['info-content']}>
            <img src={skypeImg} className={styles.icon} />
            <span>{skype}</span>
          </h5>
          <h5 className={styles['info-content']}>
            <img src={facebookImg} className={styles.icon} />
            <span>{facebook}</span>
          </h5>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.info}>
          <h6>Photos and Videos</h6>
          <h1>Share your pictures and videos with {name}!</h1>
          <h6>Capture the moment on your phone and easily share it with your Compassion child.</h6>
        </div>
        <img src={hiking} />
      </div>
      <div className={styles.footer}>© 2020 Compassion International. All Rights Reserved.</div>
    </div>
  )
}

export default SponsorContactData
