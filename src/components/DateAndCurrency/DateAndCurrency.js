import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getExchangeRate from '../../actions/exchangeRateActions';
import './DateAndCurrency.css';
import { DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaExchangeAlt } from 'react-icons/fa';
import Bounce from 'react-reveal/Bounce';
import {
  Button,
  Container,
  Form,
  DatePickerStyle,
  DateLabel,
  Label,
  DropDownContainer,
  DropDownStyle,
  Exchange,
} from '../../styledComponents';

const DateAndCurrency = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  
  let history = useHistory();
  const currencies = ['EUR', 'USD', 'GBP'];

  let date = new Date();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (from !== '' && to !== '') {
      if (from !== to) dispatch(getExchangeRate(startDate, from, to));
      else alert('Please choose different Currencies');

      const path = history.location.pathname;
      if (path === '/') history.push('/line-charts');
      else history.push(path);
    } else {
      alert('Please fill all inputs');
    }
  };
  const handleSwap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <Container>
      <Bounce top cascade>
        <Form>
          <DatePickerStyle>
            <DateLabel>Date </DateLabel>
            <DatePicker
              className='date-input'
              maxDate={startDate}
              minDate={date.setDate(date.getDate() - 364)}
              closeOnScroll={true}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </DatePickerStyle>
          <DropDownContainer>
            <DropDownStyle>
              <Label>From</Label>
              <DropdownList
                data={currencies}
                value={from}
                placeholder={'EUR'}
                onChange={(value) => setFrom(value)}
              />
            </DropDownStyle>
            <Exchange>
              <FaExchangeAlt size={25} onClick={handleSwap} />
            </Exchange>
            <DropDownStyle>
              <Label>To</Label>
              <DropdownList
                data={currencies}
                value={to}
                placeholder={'USD'}
                onChange={(value) => setTo(value)}
              />
            </DropDownStyle>
          </DropDownContainer>
          <div>
            <Button onClick={handleSubmit}>View Chart</Button>
          </div>
        </Form>
      </Bounce>
    </Container>
  );
};

export default DateAndCurrency;
