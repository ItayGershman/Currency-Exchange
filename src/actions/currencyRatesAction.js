import {
  SET_CURRENCY_RATES_REQUEST,
  SET_CURRENCY_RATES_SUCCESS,
  SET_CURRENCY_RATES_FAIL,
} from '../constants/currencyConverter';
import axios from 'axios';
import { formatDate } from '../utils';

//Get all relevant rates from data
const formatData = (startDate, date, convertedCurr, data, period) => {
  let iterableDate = startDate;
  let normalizeData = [];
  let lastRate = 0;
  for (let i = 0; i < period; ++i) {
    if (iterableDate in data.rates) {
      //There are dates without exchange rates.
      let newData = {
        name: iterableDate,
        rate: JSON.stringify(data.rates[iterableDate][convertedCurr]),
      };
      normalizeData.push(newData);
      lastRate = newData.rate;
    } else if (lastRate !== 0) {
      // Don't consider the first days without exchange rates.
      let newData = {
        name: iterableDate,
        rate: lastRate,
      };
      normalizeData.push(newData);
    }
    date.setDate(date.getDate() + 1); //Get data from the next date
    iterableDate = formatDate(date);
  }
  return normalizeData;
};

const getCurrencyRates = (base) => async (dispatch) => {
  dispatch({ type: SET_CURRENCY_RATES_REQUEST });

  //Set time period to get rates from
  const period = 375; //1 year + 1 week before user choice + 3 days because there are dates with no exchange
  let date = new Date();
  let today = formatDate(date);
  date.setDate(date.getDate() - period);
  let startDate = formatDate(date);
  const currencies = ['EUR', 'USD', 'GBP'];
  const convertedCurr = currencies.filter((cur) => cur !== base);

  try {
    const url = `https://api.exchangeratesapi.io/history?base=${base}&start_at=${startDate}&end_at=${today}`;
    let { data } = await axios.get(url); //Get rates from base to converted currency
    //Set first exchange rate
    let dataObj = formatData(startDate, date, convertedCurr[0], data, period);
    localStorage.setItem(
      `${base}_${convertedCurr[0]}`,
      JSON.stringify(dataObj)
    );

    //Set second exchange rate
    date = new Date();
    date.setDate(date.getDate() - period);
    dataObj = formatData(startDate, date, convertedCurr[1], data, period);
    localStorage.setItem(
      `${base}_${convertedCurr[1]}`,
      JSON.stringify(dataObj)
    );
    dispatch({ type: SET_CURRENCY_RATES_SUCCESS });
  } catch (error) {
    dispatch({ type: SET_CURRENCY_RATES_FAIL, payload: error.message });
  }
};

export default getCurrencyRates;
