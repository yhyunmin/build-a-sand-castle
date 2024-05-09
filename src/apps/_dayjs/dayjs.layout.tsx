import Basic from './components/Basic.tsx';
import style from './style.module.css';
import { useState } from 'react';
import Apply from './components/Apply.tsx';
const DayjsLayout = () => {
  const [page, setPage] = useState('basic');
  return (
    <>
      <h1>Dayjs Component</h1>
      <div className={style.nav}>
        <button onClick={() => setPage('basic')}>BASIC</button>
        <button onClick={() => setPage('apply')}>APPLY</button>
        <button onClick={() => setPage('advanced')}>ADVANCED</button>
      </div>
      {page === 'basic' && <Basic />}
      {page === 'apply' && <Apply />}
      {page === 'advanced' && <Basic />}
    </>
  );
};

export default DayjsLayout;
