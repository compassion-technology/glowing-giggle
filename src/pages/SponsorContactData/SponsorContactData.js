import React, { useEffect, useState } from 'react'

import hiking from '@assets/hiking.jpg'
import AppIcons from '@components/AppIcons'

import styles from './SponsorContactData.module.css'

const SponsorContactData = ({ match, history, location }) => {
  const [sponsorData, setSponsorData] = useState(location.state.data)
  const { id } = match.params

  useEffect(() => {
    if (!sponsorData) {
      history.push('/')
    }
  }, [sponsorData])

  console.log(sponsorData, ' sponsor data')

  const { name = '', image = '' } = sponsorData[id]

  return (
    <div className={styles.sponsor}>
      <div className={styles.section2}>
        <img src={image} />
        <div className={styles.info}>
          <h6>Messages</h6>
          <h1>{name} wants to chat with you</h1>
          <h6>Simply download the chat app on the Apple Store or Google Play and get chatting.</h6>
          <AppIcons />
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.info}>
          <h6>Photos and Videos</h6>
          <h1>Share with {name} your pictures and videos</h1>
          <h6>Capture the moment on your phone and easily share it with your Compassion child.</h6>
        </div>
        <img src={hiking} />
      </div>
      <div className={styles.footer}>© 2020 Compassion International. All Rights Reserved.</div>
    </div>
  )
}

export default SponsorContactData
