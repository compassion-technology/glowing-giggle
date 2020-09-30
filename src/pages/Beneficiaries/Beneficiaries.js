import React, { useEffect, useState } from 'react'

import skippy from '@assets/skippy.png'
import AppIcons from '@components/AppIcons'

import styles from './Beneficiaries.module.css'

const Beneficiaries = ({ match, history, location }) => {
  const [benData, setBenData] = useState(location.state.data)
  const { id } = match.params

  useEffect(() => {
    if (!benData) {
      history.push('/')
    }
  }, [benData])

  console.log(benData, ' ben data')

  const { name = '', image = '' } = benData[id]

  return (
    <div className={styles.beneficiaries}>
      <div className={styles.nav}>
        <img src={skippy} className={styles.skippy} />
        <ul className={styles.list}>
          <li>Why WhatsApp?</li>
          <li>Features</li>
          <li>Privacy & Safety</li>
        </ul>
      </div>
      <div className={styles.section2}>
        <img src={image} />
        <div className={styles.info}>
          <h6>Messages</h6>
          <h1>{name} wants to chat with you on WhatsApp</h1>
          <h6>Simply click the WhatsApp icon below to get chatting.</h6>
          <AppIcons />
        </div>
      </div>
      {/* <div className={styles.section3}>
        <div className={styles.info}>
          <h6>Photos and Videos</h6>
          <h1>Share your pictures and videos with {name}!</h1>
          <h6>Capture the moment on your phone and easily share it with your Compassion child.</h6>
        </div>
        <img src={hiking} />
      </div>
      <div className={styles.footer}>© 2020 Compassion International. All Rights Reserved.</div> */}
    </div>
  )
}

export default Beneficiaries
