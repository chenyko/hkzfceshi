import { GET_CITY_NAME } from '../ActionType'
export let getCityNameAction = (cityName) => {
  return {
    type: GET_CITY_NAME,
    value: cityName
  }
}