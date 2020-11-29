import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { minMaxVals } from '../utils';

const CurrencyAreaChart = ({ rates }) => {
  let domain;
  if (rates.length > 0) domain = minMaxVals(rates);

  return (
    <ResponsiveContainer width='90%' height={400}>
      <BarChart
        data={rates}
        margin={{ top: 0, right: 0, left: 20, bottom: 25 }}
      >
        <CartesianGrid stroke='#ccc' />
        <XAxis
          dataKey='name'
          label={{ value: 'Date', angle: 0, position: 'bottom' }}
        ></XAxis>{' '}
        <YAxis
          label={{ value: 'rate', angle: -90, position: 'left' }}
          domain={domain}
        />
        <Bar type='monotone' dataKey='rate' stroke='#8884d8' fill='#8884d8' />
        <BarChart dataKey='uv' fill='#82ca9d' />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default CurrencyAreaChart;
