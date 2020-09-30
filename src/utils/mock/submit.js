import { sleep } from './common'

import sponsor from '../../assets/sponsor.jpg'

const submitBeneficiary = {
  name: 'Jane Smith',
  email: 'jane@us.ci.org',
  address: 'Compassion International \nColorado Springs, CO 80997',
  skype: 'janesmith0101',
  facebook: 'janeSmith',
  image: sponsor
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
  return { data: submitBeneficiary, errors: '' }
}
