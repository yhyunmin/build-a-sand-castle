import Calendar from './Calendar.tsx';
import { useState } from 'react';
import dayjs from 'dayjs';

const Advanced = () => {
  const currentDate = dayjs(new Date());

  const [year, setYear] = useState(currentDate.year());
  const [month, setMonth] = useState(currentDate.month() + 1);
  const [firstDayofWeek, setFirstDayofWeek] = useState(
    dayjs().date(1).get('day'),
  );
  const emptyCell: null[] = new Array(firstDayofWeek).fill(null);
  const cell = new Array(dayjs(`${year}-${month}`).daysInMonth())
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <>
      <h2>Advanced</h2>
      <p>year {year}</p>
      <p>month {month}</p>
      <p>firstDayofWeek {firstDayofWeek}</p>
      <p>emptyCell 갯수 {emptyCell.length}</p>
      <hr />
      <Calendar emptyCell={emptyCell} cell={cell} />
    </>
  );
};

export default Advanced;
