import { sleep } from './common'

//when registering for chat app, redirect to chat window for that supporter/beneficiary pair
export const registerOK = async () => {
  await sleep()
  return '/chat/123/12345678'
}
