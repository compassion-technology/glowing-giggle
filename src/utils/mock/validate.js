import { sleep } from './common'
import graduate from '../../assets/graduate.jpg'

const validateOK = {
  12345678: {
    id: '12345678',
    name: 'Grace',
    image: graduate
  },
  12345679: {
    id: '12345679',
    name: 'Penelope',
    image: 'https://placekitten.com/102/102'
  }
}

export const mockValidateOK = async () => {
  await sleep()
  return { data: validateOK, errors: '' }
}

export const mockValidateNoEligibleChildren = async () => {
  await sleep()
  return { data: {}, errors: 'No Eligible Children' }
}
