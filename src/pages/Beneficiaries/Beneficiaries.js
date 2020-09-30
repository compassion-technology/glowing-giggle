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

  const { name = '', image = '' } = benData[id]

  return (
    <div className={styles.beneficiaries}>
      {
        <span>
          {name}
          <img src={image} />
        </span>
      }
    </div>
  )
}

export default Beneficiaries
