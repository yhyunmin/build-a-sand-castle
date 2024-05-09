import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
dayjs.extend(relativeTime);
dayjs.locale('ko');

//todo 렌더링 기점 createAt 만들고 clone 하기
const product = {
  title: 'dummy',
  amount: '1',
  price: '1000',
  createdAt: new Date(),
};

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
        프로덕트 시간{' '}
        <span>
          {dayjs(product.createdAt).format('YYYY년.MMMM.DD일 HH시mm분')}
        </span>
      </p>
    </>
  );
};

export default Apply;
