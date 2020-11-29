const formatDate = (date) => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

//Set range of numbers corresponding to the values
const minMaxVals = (rates) => {
  const max = Math.max.apply(
    null,
    rates.map((item) => item.rate)
  );
  const min = Math.min.apply(
    null,
    rates.map((item) => item.rate)
  );
  return [Number((min - 0.05).toFixed(1)), Number((max + 0.05).toFixed(1))];
};

export { formatDate, minMaxVals };
