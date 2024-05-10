import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
dayjs.extend(relativeTime);
dayjs.locale('ko');

//todo 렌더링 기점 createAt 만들고 clone 하기
const createdAt = '2023-11-02T23:56:00+09:00';
const now = dayjs(new Date());
const updatedAt = dayjs(now).clone();
const expiredAt = dayjs('2024-05-21');
// const createdAt = clone.toNow();
const product = {
  title: 'dummy',
  amount: '1',
  price: '1000',
  createdAt,
  updatedAt,
};
const diffDays = expiredAt.diff(createdAt, 'day');
const month = Math.floor(diffDays / 30);
const days = diffDays % 30;

const Apply = () => {
  return (
    <>
      <h2>Apply</h2>
      한국어응용
      <br />
      <code>
        dayjs.extend(relativeTime); <br />
        dayjs.locale('ko');
      </code>
      <h2>프로덕트 상세</h2>
      <p>
        프로덕트 이름 <span>{product.title}</span>
      </p>
      <p>
        프로덕트 수량 <span>{product.amount}</span>
      </p>
      <p>
        프로덕트 가격 <span>{product.price}</span>
      </p>
      <p>
        프로덕트 최초등록 <span>{dayjs(product.createdAt).fromNow()}</span>
      </p>
      <p>
        프로덕트 업데이트 <span>{dayjs(product.updatedAt).fromNow()}</span>
      </p>
      <p>
        프로덕트 만료기간 <span>{`${month}개월 ${days}일 남음`}</span>
      </p>
    </>
  );
};

export default Apply;
