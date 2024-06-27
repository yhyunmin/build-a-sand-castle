import Tab1 from './components/Tab1.tsx';
import { FormEvent, useEffect, useState } from 'react';
import useTabStore from './store/useTabStore.ts';
import { literal } from 'zod';

type TODO = any;

// tab navigation
const tab = () => {
  // input 개수 , select 개수 정하기
  // select 안에 option 선택하기
  const [page, setPage] = useState<string>('main');
  return (
    <>
      <h1>form 생성 기능</h1>
      <div>
        <button onClick={() => setPage('main')}>Main</button>
        <button onClick={() => setPage('tab1')}>Tab1</button>
      </div>
      {page === 'main' && <Main />}
      {page === 'tab1' && <Tab1 />}
      {page === 'tab2' && <Tab1 />}
    </>
  );
};

// ===============================
// ===============================
// ===============================
// ===============================
function Main() {
  const [makeThis, setMakeThis] = useState();
  //TODO zustand store 가져오기
  const inputKeyContents = useTabStore((state) => state.InputKeyContents);
  console.log(inputKeyContents);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);
    return;
  }
  function onChange(e) {
    console.log(e.target.value);
    setMakeThis(e.target.value);
  }
  useEffect(() => {}, [makeThis]);

  return (
    <>
      <h2>input & select</h2>
      <input
        type="radio"
        name="makeOne"
        id="makeInput"
        value="input"
        onChange={onChange}
      />
      <label htmlFor="makeInput">Input 만들기</label>
      <input
        type="radio"
        name="makeOne"
        id="makeSelect"
        value="select"
        onChange={onChange}
      />
      <label htmlFor="makeSelect">select 만들기</label>
      <hr />
      {makeThis === 'input' ? (
        <InputMaker />
      ) : makeThis === 'select' ? (
        <h1>hh</h1>
      ) : null}
      <ul>
        <h3>생성 목록</h3>
        {inputKeyContents &&
          inputKeyContents.map((v, i) => {
            for (let key in v) {
              <li>
                {key},{v[key]}
              </li>;
            }
          })}
      </ul>
    </>
  );
}
//
// ===============================
// ===============================
// ===============================
// ===============================
//
//msw
// input1 : title
// input2 : address
// select1 :{
// option1: y
// option2: n
// }
// input3:phonenumber
function InputMaker() {
  const onSubmit = (e) => {
    const formData = new FormData();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="inputMakerId">인풋 네임</label>
        <br />
        <input type="text" id="inputMakerId" />
        <button type="submit">추가하기</button>
      </form>
    </>
  );
}

export default tab;
