export const INCREMENT =  'counter/INCREMENT'
export const DECREMENT =  'counter/DECREMENT'
export const RESET =  'counter/RESET'

export function increment() {
  console.log(1111)
  return {type: INCREMENT}
}

export function decrement() {
  return {type: DECREMENT}
}

export function reset() {
  return {type: RESET}
}