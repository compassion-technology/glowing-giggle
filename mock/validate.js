import sleep from './common'

const validateOK = {
  'children': [
    {
      id: '12345678',
      name: 'Ricky',
      image: 'https://placekitten.com/101/101'
    },
    {
      id: '12345679',
      name: 'Penelope',
      image: 'https://placekitten.com/102/102'
    }
  ]
}

export const mockValidateOK = async () => {
  await sleep(3000)
  return validateOK
}

export const mockValidateNoEligibleChildren = async () => {
  await sleep(3000)
  return {}
}
