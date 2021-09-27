const summHours = (arr) => {
  const reducer = (a, current) => a + current;

  const hrs = arr.map((item) => item.hour);
  const mts = arr.map((item) => item.min);

  const totalHours = hrs.reduce(reducer, 0);
  const minutes = mts.reduce(reducer, 0);

  const totalMinutes = minutes / 60;
  return Number((totalHours + totalMinutes).toFixed(1));
};

const addMonthName = () => {
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const d = new Date();
  return monthNames[d.getMonth()];
};

export { summHours, addMonthName };
