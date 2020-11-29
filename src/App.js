import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DateAndCurrency from './components/DateAndCurrency/DateAndCurrency';
import getCurrencyRates from './actions/currencyRatesAction';
import { useDispatch } from 'react-redux';
import { AppContainer, Spinner } from './styledComponents';
import Footer from './components/Footer';
import Chart from './screens/Chart';

function App() {
  const state = useSelector((state) => state);
  const { loading, error } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrencyRates('EUR'));
    dispatch(getCurrencyRates('USD'));
    dispatch(getCurrencyRates('GBP'));
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <AppContainer>
        {loading ? <Spinner></Spinner> : <DateAndCurrency />}
        {error && <div>{error}</div>}
        <Switch>
          <Route path='/line-charts'>
            <Chart chart={'line'} />
          </Route>
          <Route path='/area-charts'>
            <Chart chart={'area'} />
          </Route>
          <Route path='/bar-charts'>
            <Chart chart={'bar'} />
          </Route>
          <Route path='/'></Route>
        </Switch>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
