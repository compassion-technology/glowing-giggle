import React from 'react'

import apple from '@assets/apple.svg'
import google from '@assets/google.svg'

import styles from './AppIcons.module.css'

const AppIcons = () => {
  return (
    <div className={styles.downloads}>
      <a href='https://hackathon-chat.netlify.app/chat/test/grace'>
        <img src={apple} />
        <img src={google} />
      </a>
    </div>
  )
}

export default AppIcons
