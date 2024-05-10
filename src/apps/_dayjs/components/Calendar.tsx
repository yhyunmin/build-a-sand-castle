import style from '../style/calendar.module.css';

type Props = {
  emptyCell: null[];
  cell: number[];
};
const Calendar = ({ emptyCell, cell }: Props) => {
  return (
    <>
      <h2>Calendar</h2>
      <div className={style.container}>
        <div className={style.header}>
          <h3>2024 May</h3>
          <div className={style.btnGroup}>
            <button>{'<'}</button>
            <button>{'>'}</button>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.days}>
            <div className={style.daysCol}>Mon</div>
            <div className={style.daysCol}>Tue</div>
            <div className={style.daysCol}>Wed</div>
            <div className={style.daysCol}>Thu</div>
            <div className={style.daysCol}>Fri</div>
            <div className={style.daysCol}>Sat</div>
            <div className={style.daysCol}>Sun</div>
          </div>
          <div className={style.dates}>
            {emptyCell.map(() => {
              return <div className={style.datesCol}>{''}</div>;
            })}
            {cell.map((v, _) => {
              return <div className={style.datesCol}>{v}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
