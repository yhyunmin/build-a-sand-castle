import dayjs from 'dayjs';
import Dates from './Dates.tsx';

const Basic = () => {
  const month = dayjs().format('MM');
  const year = dayjs().format('YYYY');
  const 이번달 = dayjs(`${year}${month}01`);
  const date = dayjs('2023-11-02T23:56:00+09:00');
  const 오늘 = dayjs(new Date());
  const 시작하는요일 = 이번달.format('d');
  const clone = 오늘.clone();
  const 끝나는날 = 오늘.endOf('month').format('d');
  const 끝나는요일 = 오늘.endOf('month').format('d');
  const 월이름 = dayjs().format('MMMM');
  return (
    <div>
      <h2>BASIC</h2>
      d는요일(day) D는 날(Date)
      <Dates
        h3="dayjs().format()"
        p={dayjs().format()}
        text="dayjs 기본 포맷"
      />
      <Dates h3="dayjs().format('MM')" p={month} text="dayjs 포맷 MM" />
      <Dates h3="dayjs().format('YYYY')" p={year} text="dayjs 포맷 YYYY" />
      <Dates
        h3="dayjs(`${year}${month}01`)"
        p={이번달.format('YYYY.MM.DD')}
        text="dayjs 해당년도 첫 일"
      />
      <Dates
        h3="date = dayjs('2023-11-02T23:56:00+09:00')"
        p={date.format()}
        text="커스텀 날짜 dayjs "
      />
      <Dates h3="dayjs().second()" p={dayjs().second()} text="dayjs 초" />
      <Dates
        h3="dayjs(new Date());"
        p={오늘.format()}
        text="new Date호출(지금)"
      />
      <Dates
        h3="시작하는요일"
        p={시작하는요일}
        text=".format('d')를 통해 시작하는 요일 가져오기   "
      />
      <Dates
        h3=".clone()"
        p={clone.format()}
        text="dayjs의 시간은 불변성이라 clone 하여 사용함 "
      />
      <Dates
        h3="해당 끝나는날"
        p={끝나는날}
        text=".endOf('day','month','year')를 통해 끝나는 요일 가져오기 ( 현재 xx의 마지막 날짜 )"
      />
      <Dates
        h3="이번달 끝나는 요일"
        p={끝나는요일}
        text="해당 끝나는 요일 5 (금요일)"
      />
      <Dates h3="월 이름" p={월이름} text="월 이름(영문)" />
    </div>
  );
};

export default Basic;
