import { GET_DATA_WITH_API } from "./actionTypes";

export function getExchangeRates(data) {
  return {
    type: GET_DATA_WITH_API,
    payload: data,
  };
}
