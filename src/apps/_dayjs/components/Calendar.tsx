import style from '../style/calendar.module.css';

type Props = {
  year: string;
  month: string;
  emptyCell: null[];
  cell: number[];
  handleSetCustomDate: (year: string, month: string) => void;
  handlePrevMonth: (month: number) => void;
  handleNextMonth: (month: number) => void;
  handleVisible: () => void;
  isVisible: boolean;
};
const Calendar = ({
  year,
  month,
  emptyCell,
  cell,
  handleVisible,
  handlePrevMonth,
  handleNextMonth,
}: Props) => {
  return (
    <>
      <h2>Calendar</h2>
      <div className={style.container}>
        <div className={style.header}>
          <h3 onClick={() => handleVisible()}>
            {year}년 {month}월
          </h3>
          <div className={style.btnGroup}>
            <button onClick={() => handlePrevMonth(1)}>{'<'}</button>
            <button onClick={() => handleNextMonth(1)}>{'>'}</button>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.days}>
            <div className={style.daysCol}>Sun</div>
            <div className={style.daysCol}>Mon</div>
            <div className={style.daysCol}>Tue</div>
            <div className={style.daysCol}>Wed</div>
            <div className={style.daysCol}>Thu</div>
            <div className={style.daysCol}>Fri</div>
            <div className={style.daysCol}>Sat</div>
          </div>
          <div className={style.dates}>
            {emptyCell.map(() => {
              return <div className={style.datesCol}>{''}</div>;
            })}
            {cell.map((v) => {
              return <div className={style.datesCol}>{v}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
