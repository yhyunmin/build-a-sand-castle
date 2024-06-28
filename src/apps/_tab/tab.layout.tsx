import Tab1 from './components/Tab1.tsx';
import { FormEvent, useEffect, useState } from 'react';
import useTabStore from './store/useTabStore.ts';

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
  const { keyContents, inputKeyContents, setInputKeyContents } = useTabStore();
  //TODO zustand store 가져오기
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
        <SelectMaker />
      ) : null}
      <ul>
        <h1>현재 keyContents 목록</h1>

        {/*{inputKeyContents &&*/}
        {/*  inputKeyContents.map((v, i) => {*/}
        {/*    // 객체는 이렇게 돌리기*/}
        {/*    return Object.keys(v).map((key) => (*/}
        {/*      <h1 key={`${i}-${key}`}>*/}
        {/*        {key}: {v[key]}*/}
        {/*      </h1>*/}
        {/*    ));*/}
        {/*  })}*/}
        {Boolean(keyContents) &&
          keyContents.map((객체, i) => {
            return (
              <p>
                순번 : {객체.id + 1}
                타입 : {객체.type}
                타이틀 : {객체.label}
                컨텐츠 : {객체.contents}
              </p>
            );
          })}
      </ul>
    </>
  );
}

function InputMaker() {
  // const { inputKeyContents, setInputKeyContents } = useTabStore();
  const { keyContents, setKeyContents } = useTabStore();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // formData 내부 data 가져오기 {name : value}
    const data = Object.fromEntries(formData);
    // setInputKeyContents(
    //   `input${inputKeyContents.length + 1}`,
    //   data[Object.keys(data)[0]],
    // );
    // console.log(data); {inputTitleName: 'ㄳㄴㄷㅅ', inputContentsName: 'ㄴㄷㅅㄴㅅ'}
    setKeyContents('input', data['inputTitleName'], data['inputContentsName']);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <br />
        <label htmlFor="inputTitleId">인풋 타이틀</label>
        <input type="text" id="inputTitleId" name="inputTitleName" />
        <label htmlFor="inputContentsId">인풋 컨텐츠</label>
        <input type="text" id="inputContentsId" name="inputContentsName" />
        <button type="submit">추가하기</button>
      </form>
    </>
  );
}
function SelectMaker() {
  const { keyContents, setKeyContents } = useTabStore();
  const [optionCount, setOptionCount] = useState(1);
  const onSubmit = () => {};
  const handleAddOption = (e) => {
    e.preventDefault();
    setOptionCount(optionCount + 1);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="">SELECT LABEL 이름</label>
        <input type="text" id="selectMakerId" name="selectMakerName" />
        <button onClick={handleAddOption}> 옵션추가하기</button>
        <br />
        <br />
        <label htmlFor=""></label>
        {Array.from({ length: optionCount }, (_, i) => (
          <>
            <input type="text" id="optionMakerId" name="optionMakerName" />
            <br />
          </>
        ))}
      </form>
      <button type="submit">추가하기</button>
    </>
  );
}

export default tab;
