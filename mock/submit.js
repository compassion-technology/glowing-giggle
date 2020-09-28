import sleep from './common'

export const mockSubmitOK = async () => {
  await sleep(3000)
  return {}
}

export const mockSubmitError = async () => {
  await sleep(3000)
  return {}
}
