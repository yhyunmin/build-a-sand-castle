import { useState } from 'react';
import style from '../_dayjs/style.module.css';
import Basic from './components/Basic.tsx';

const AggridLayout = () => {
  const [page, setPage] = useState('basic');
  return (
    <>
      <h1>Ag-grid Component</h1>
      <div className={style.nav}>
        <button onClick={() => setPage('basic')}>BASIC</button>
        <button onClick={() => setPage('apply')}>APPLY</button>
        <button onClick={() => setPage('advanced')}>ADVANCED</button>
      </div>
      {page === 'basic' && <Basic />}
      {/*{page === 'apply' && <Apply />}*/}
      {/*{page === 'advanced' && <Advanced />}*/}
    </>
  );
};

export default AggridLayout;
