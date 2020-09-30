import { beneficiaryList, sleep } from './common'

//when logging in/registering for chat app, redirect to chat window for that supporter/beneficiary pair
export const registerOK = async () => {
  await sleep()
  return '/chat/123/12345678'
}

//when supporter is logging in and has multiple participating beneficiaries, select which chat
export const registerMultipleBeneficiaries = async () => {
  return beneficiaryList
}
