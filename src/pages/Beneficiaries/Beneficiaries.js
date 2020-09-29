import React from 'react'

import { mockValidateNoEligibleChildren, mockValidateOK } from '../../utils/mock/validate'

import styles from './Beneficiaries.module.css'

const Beneficiaries = () => {
  const { data } = mockValidateOK()

  return (
    <div className={styles.beneficiaries}>
      {}
    </div>
  )
}

export default Beneficiaries
