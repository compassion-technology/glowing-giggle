import { sleep } from './common'

const submitBeneficiary = {
  email: 'supporter@us.ci.org',
  address: 'Compassion International \nColorado Springs, CO 80997',
  skype: 'compassion',
  facebook: 'compassionintl'
}

export const mockSubmitOK = async () => {
  await sleep()
  return {}
}

export const mockSubmitError = async () => {
  await sleep()
  return {}
}

// if a beneficiary is registering through microsite, return supporter's contact information
export const mockSubmitBeneficiary = async () => {
  await sleep()
  return submitBeneficiary
}
