import React from 'react'

import apple from '@assets/apple.svg'
import google from '@assets/google.svg'

import styles from './AppIcons.module.css'

const AppIcons = () => {
  return (
    <div className={styles.downloads}>
      <img src={apple} />
      <img src={google} />
    </div>
  )
}

export default AppIcons
