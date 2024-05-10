import Calendar from './Calendar.tsx';
import { Fragment, useEffect, useState } from 'react';
import dayjs from 'dayjs';

const Advanced = () => {
  const [date, setDate] = useState<dayjs.Dayjs>();
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [emptyCell, setEmptyCell] = useState<Array<null>>([]);
  const [cell, setCell] = useState<Array<number>>([]);
  const [yearInputValue, setYearInputValue] = useState('');
  const [monthInputValue, setMonthInputValue] = useState('');
  const handleNextMonth = () => {
    setDate((prev) => dayjs(prev).add(1, 'M'));
  };

  const handlePrevMonth = () => {
    setDate((prev) => dayjs(prev).subtract(1, 'M'));
  };

  const onChangeYear = (e) => {
    setYearInputValue(e.target.value);
  };
  const onChangeMonth = (e) => {
    setMonthInputValue(e.target.value);
  };
  const handleSetCustomDate = (year, month) => {
    if (year && month) {
      setDate(dayjs(`${year}-${month}`));
    }
  };

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const onInit = () => {
    const currentDate = dayjs();
    setDate(currentDate);
    setFirstDayOfWeek(currentDate.date(1).get('day'));
    setEmptyCell(Array(currentDate.date(1).get('day')).fill(null));
    setCell(
      Array(currentDate.daysInMonth())
        .fill(null)
        .map((_, i) => i + 1),
    );
  };

  useEffect(() => {
    onInit();
    console.log('init');
  }, []);

  useEffect(() => {
    const handleCells = (firstDayofweek: number) => {
      setEmptyCell(Array(firstDayofweek).fill(null));
      setCell(
        Array(dayjs(date).daysInMonth())
          .fill(null)
          .map((_, i) => i + 1),
      );
    };
    setFirstDayOfWeek(dayjs(date).date(1).get('day'));
    handleCells(firstDayOfWeek);
  }, [firstDayOfWeek, date]);

  return (
    <>
      <h2>Advanced</h2>
      <p>year {dayjs(date).year()}</p>
      <p>month {dayjs(date).month()}</p>
      <p>firstDayofWeek {firstDayOfWeek}</p>
      <p>emptyCell 갯수 {emptyCell.length}</p>
      <hr />
      {isVisible && (
        <>
          <input
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength={4}
            id="year"
            value={yearInputValue}
            onChange={(e) => onChangeYear(e)}
          />
          년
          <input
            type="text"
            min={1}
            max={12}
            maxLength={2}
            pattern="[0-9]*"
            value={monthInputValue}
            onChange={(e) => onChangeMonth(e)}
          />
          월
          <button
            onClick={() => handleSetCustomDate(yearInputValue, monthInputValue)}
          >
            확인
          </button>
        </>
      )}
      <Calendar
        year={dayjs(date).format('YYYY')}
        month={dayjs(date).format('MM')}
        emptyCell={emptyCell}
        cell={cell}
        handleNextMonth={handleNextMonth}
        handlePrevMonth={handlePrevMonth}
        handleSetCustomDate={handleSetCustomDate}
        isVisible={isVisible}
        handleVisible={handleVisible}
      />
    </>
  );
};

export default Advanced;
