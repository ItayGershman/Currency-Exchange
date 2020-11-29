import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ChartsNavigation from '../components/ChartsNav/ChartNavigation';
import {
  ChartContainer,
  ChartDisplay,
  ChartNav,
  Spinner,
} from '../styledComponents';
import CurrencyLineChart from './LineChart';
import CurrencyAreaChart from './AreaChart';
import CurrencyBarChart from './BarChart';
import Fade from 'react-reveal/Fade';

const Chart = (props) => {
  const [chart, setChart] = useState(props.chart);
  const state = useSelector((state) => state);
  const { rates, loading, error } = state;
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  let history = useHistory();
  useEffect(() => {
    if (rates.length === 0) {
      history.push('/');
    }
  });

  useEffect(() => {
    const h = history.location.pathname.replace('/', '').replace('-charts', '');
    setChart(h);
  }, [history.location.pathname]);

  useEffect(() => {
    if (myRef.current != null) executeScroll();
  }, [rates]);

  return (
    <ChartContainer>
      {loading && <Spinner></Spinner>}
      {error && <div>{error}</div>}
      {rates.length > 0 && (
        <ChartDisplay ref={myRef}>
          {chart === 'line' ? (
            <CurrencyLineChart rates={rates} />
          ) : chart === 'area' ? (
            <CurrencyAreaChart rates={rates} />
          ) : (
            <CurrencyBarChart rates={rates} />
          )}
          <Fade right>
            <ChartNav>
              <ChartsNavigation />
            </ChartNav>
          </Fade>
        </ChartDisplay>
      )}
    </ChartContainer>
  );
};

export default Chart;
