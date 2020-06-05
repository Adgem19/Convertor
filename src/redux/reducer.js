import { GET_DATA_WITH_API } from "./actionTypes";

const initialState = {
  // exchangeRates: [],
  USD:'',
  EUR:'',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA_WITH_API:
      return {
        ...state,
        USD: action.payload.Valute.USD.Value , 
        EUR: action.payload.Valute.EUR.Value ,

      };
    default:
      return state;
  }
}
