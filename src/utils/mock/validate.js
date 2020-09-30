import { beneficiaryList, sleep } from './common'

export const mockValidateOK = async () => {
  await sleep()
  return { data: beneficiaryList, errors: '' }
}

export const mockValidateNoEligibleChildren = async () => {
  await sleep()
  return { data: {}, errors: 'No Eligible Children' }
}
