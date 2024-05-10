import style from '../style/calendar.module.css';

const Calendar = () => {
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
            <div className={style.datesCol}>1</div>
            <div className={style.datesCol}>2</div>
            <div className={style.datesCol}>3</div>
            <div className={style.datesCol}>4</div>
            <div className={style.datesCol}>5</div>
            <div className={style.datesCol}>6</div>
            <div className={style.datesCol}>7</div>
            <div className={style.datesCol}>9</div>
            <div className={style.datesCol}>10</div>
            <div className={style.datesCol}>11</div>
            <div className={style.datesCol}>12</div>
            <div className={style.datesCol}>13</div>
            <div className={style.datesCol}>14</div>
            <div className={style.datesCol}>15</div>
            <div className={style.datesCol}>16</div>
            <div className={style.datesCol}>17</div>
            <div className={style.datesCol}>18</div>
            <div className={style.datesCol}>19</div>
            <div className={style.datesCol}>20</div>
            <div className={style.datesCol}>21</div>
            <div className={style.datesCol}>22</div>
            <div className={style.datesCol}>23</div>
            <div className={style.datesCol}>24</div>
            <div className={style.datesCol}>25</div>
            <div className={style.datesCol}>26</div>
            <div className={style.datesCol}>27</div>
            <div className={style.datesCol}>28</div>
            <div className={style.datesCol}>29</div>
            <div className={style.datesCol}>30</div>
            <div className={style.datesCol}>31</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
