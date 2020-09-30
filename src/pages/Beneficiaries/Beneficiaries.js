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

<<<<<<< HEAD
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
=======
  const { name = '' } = benData[id]

  return <div className={styles.beneficiaries}>{<span>{name}</span>}</div>
>>>>>>> c48a712d24c301e71156dd47cf8d5b08023115b6
}

export default Beneficiaries
