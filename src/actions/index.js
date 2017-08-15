import axios from 'axios'

const API_KEY = '5acae6423fb3b225bf75c566ce05992c'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// Using const here to avoid possible typos in /reducers/
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},fi`
  const request = axios.get(url)

  console.log('Request:', request)

  // redux-promise pauses the action here, since it sees a promise in the payload
  // and waits for the Promise to resolve
  // it then creates a new action with payload containing the resolved promise,
  // and sends that to the reducers instead
  // this cleans up our code, since we dont have to solve the promises ourselfs
  // we never want to pass unresolved Promises to reducers,
  // so thats why we use redux-promise as a middleware
  return { 
    type: FETCH_WEATHER,
    payload: request 
  }
}
