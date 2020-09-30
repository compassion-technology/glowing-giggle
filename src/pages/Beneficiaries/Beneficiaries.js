import React, { useEffect, useState } from 'react'

import celebrate from '../../assets/celebrate.png'
import AppIcons from '../../components/AppIcons'

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
      <div className={styles.section2}>
        <img src={image} />
        <div className={styles.info}>
          <h6>Messages</h6>
          <h1>{name} wants to chat with you</h1>
          <h6>Simply download the chat app on the Apple Store or Google Play and get chatting.</h6>
          <AppIcons />
        </div>
      </div>
      <div className={styles.section3}></div>
    </div>
  )
}

export default Beneficiaries
