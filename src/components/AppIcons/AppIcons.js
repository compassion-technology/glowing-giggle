import React from 'react'

import whatsapp from '@assets/whatsapp.png'

import styles from './AppIcons.module.css'

const AppIcons = () => {
  return (
    <div className={styles.downloads}>
      <a target='_blank' href='http://wa.me/+14155238886?text=join%20angle-suppose'>
        <img src={whatsapp} />
      </a>
    </div>
  )
}

export default AppIcons
