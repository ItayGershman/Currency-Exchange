import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import { minMaxVals } from '../utils';

const CurrencyLineChart = ({ rates }) => {
  let domain;
  if (rates.length > 0) domain = minMaxVals(rates);

  return (
    <ResponsiveContainer width='90%' height={400}>
      <LineChart
        data={rates}
        margin={{ top: 0, right: 0, left: 20, bottom: 25 }}
      >
        <Line type='monotone' dataKey='rate' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' />
        <XAxis
          dataKey='name'
          label={{ value: 'Date', angle: 0, position: 'bottom' }}
        ></XAxis>
        <YAxis
          label={{ value: 'rate', angle: -90, position: 'left' }}
          domain={domain}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CurrencyLineChart;
