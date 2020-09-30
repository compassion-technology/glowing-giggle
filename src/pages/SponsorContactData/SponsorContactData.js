import React, { useEffect, useState } from 'react'

import hiking from '@assets/hiking.jpg'
import AppIcons from '@components/AppIcons'

import styles from './SponsorContactData.module.css'

const SponsorContactData = ({ history, location }) => {
  const [sponsorData, setSponsorData] = useState(location.state.data)

  useEffect(() => {
    if (!sponsorData) {
      history.push('/register')
    }
  }, [sponsorData])

  console.log(sponsorData, ' sponsor data')

  const { name, email = '', address = '', skype = '', facebook = '', image = '' } = sponsorData

  return (
    <div className={styles.sponsor}>
      <div className={styles.section2}>
        <img src={image} />
        <div className={styles.info}>
          <h1>{name} wants to keep in contact with you!</h1>
          <h4>You can contact your sponsor by sending a letter to</h4>
          <h5>{address}</h5>
          <h5>Email: {email}</h5>
          <h5>Skype: {skype}</h5>
          <h5>Facebook: {facebook}</h5>
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
