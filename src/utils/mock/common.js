import graduate from '../../assets/graduate.jpg'

const DEF_DELAY = 1000

export const beneficiaryList = {
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
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY))
}
