import { GET_GREETING } from "./actionTypes"

export const getGreetings = (payload) {
  return { type: GET_GREETING, payload }
}