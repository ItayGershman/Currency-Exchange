import {
  SET_CURRENCY_RATES_REQUEST,
  SET_CURRENCY_RATES_SUCCESS,
  SET_CURRENCY_RATES_FAIL,
} from '../constants/currencyConverter';
import {
  CURRENCY_EXCHANGE_RATES_REQUEST,
  CURRENCY_EXCHANGE_RATES_SUCCESS,
  CURRENCY_EXCHANGE_RATES_FAIL,
} from '../constants/exchangeRates';

const initialState = {
  loading: false,
  rates: [],
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENCY_RATES_REQUEST:
      return { ...state, loading: true };
    case SET_CURRENCY_RATES_SUCCESS:
      return { ...state, loading: false };
    case SET_CURRENCY_RATES_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    case CURRENCY_EXCHANGE_RATES_REQUEST:
      return { ...state, loading: true };
    case CURRENCY_EXCHANGE_RATES_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        rates: payload.rates,
        loading: false,
      };
    case CURRENCY_EXCHANGE_RATES_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default currencyReducer;
