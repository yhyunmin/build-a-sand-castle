import { useState } from 'react';
import style from '../_dayjs/style.module.css';
import Basic from './components/Basic.tsx';
import Apply from './components/Apply.tsx';
import Advanced from './components/Advanced.tsx';
import Practice from './components/Practice.tsx';

const AggridLayout = () => {
  const [page, setPage] = useState('basic');
  return (
    <>
      <h1>Ag-grid Component</h1>
      <div className={style.nav}>
        <button onClick={() => setPage('basic')}>BASIC</button>
        <button onClick={() => setPage('apply')}>APPLY</button>
        <button onClick={() => setPage('advanced')}>ADVANCED</button>
        <button onClick={() => setPage('practice')}>PRACTICE</button>
      </div>
      {page === 'basic' && <Basic />}
      {page === 'apply' && <Apply />}
      {page === 'advanced' && <Advanced />}
      {page === 'practice' && <Practice />}
    </>
  );
};

export default AggridLayout;
