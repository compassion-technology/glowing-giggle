import React, { useEffect, useState } from 'react'

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

  const { name = '' } = benData[id]

  return <div className={styles.beneficiaries}>{<span>{name}</span>}</div>
}

export default Beneficiaries
