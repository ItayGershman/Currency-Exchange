import {
  CURRENCY_EXCHANGE_RATES_REQUEST,
  CURRENCY_EXCHANGE_RATES_SUCCESS,
  CURRENCY_EXCHANGE_RATES_FAIL,
} from '../constants/exchangeRates';
import { formatDate } from '../utils';

//Search the index of the date inside the array
function findTodayRate(rates, today) {
  const dateData = rates.findIndex((post) => {
    if (post.name === today) {
      return true;
    }
  });
  return dateData;
}

//Receive rates from the requested currencies for the last 7 days
const getExchangeRate = (date, base, convertedCurr) => async (dispatch) => {
  dispatch({ type: CURRENCY_EXCHANGE_RATES_REQUEST });
  try {
    const rates = JSON.parse(localStorage.getItem(`${base}_${convertedCurr}`));
    let today = formatDate(date);
    let weekData = [];
    let todayObj = findTodayRate(rates, today);
    while (todayObj === -1) {
      date.setDate(date.getDate() - 1);
      today = formatDate(date);
      todayObj = findTodayRate(rates, today);
    }
    for (let j = 6; j >= 0; --j) {
      weekData.push(rates[todayObj - j]);
    }
    const payload = {
      rates: weekData,
    };
    date = new Date();
    dispatch({ type: CURRENCY_EXCHANGE_RATES_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: CURRENCY_EXCHANGE_RATES_FAIL, payload: error.message });
  }
};

export default getExchangeRate;
