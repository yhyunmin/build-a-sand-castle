import { FormEvent, useEffect, useState } from 'react';
import useTabStore from '../store/useTabStore.ts';

//TODO 메인에서 등록한 INPUT ,SELECT OPTION 화면에 출력하기 => submit 통해서 store 에 값 보내기
const Tab1 = () => {
  const thisTabContents = useTabStore((state) => state.action.setTabContents);

  useEffect(() => {
    return () => {
      //
    };
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const data = {};
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      data[key] = value;
      // useStore 에 넣기
      console.log({ key, value });
    }
    thisTabContents(data);
    console.log(data);
  }
  return (
    <>
      <h1>tab1</h1>
      <form onSubmit={handleSubmit}>
        <input name="input1" id="input1" type="text" />
        <input name="input2" id="input2" type="text" />
        <input name="input3" id="input3" type="text" />
        <input name="input4" id="input4" type="text" />
        <select name="input5" id="input5">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input name="" id="input6" type="text" />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Tab1;
