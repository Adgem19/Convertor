import { getExchangeRates } from "./actionCreator";

export function asyncGetExchangeRates() {
  return async (dispatch) => {
    let response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    const data = await response.json()
    dispatch(getExchangeRates(data));
  };
}
