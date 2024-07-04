import { useState } from 'react';
import { useForm } from 'react-hook-form';

type valueType = 'input' | 'select' | null;
const Build = () => {
  const [_, setValue] = useState<valueType>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <h1> 설문조사 폼 만들기 </h1>
      <form onChange={onChange}>
        <input type="radio" value="input" id="selector" name="selector" />
        <label htmlFor="selector"> input 만들기 </label>
        <input type="radio" value="select" id="selector2" name="selector" />
        <label htmlFor="selector2"> select 만들기</label>
      </form>
      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="label">질문 주제</label> <br />
        <input type="text" {...register('label')} />
        <br />
        <label htmlFor="placeholder">placeholder</label> <br />
        <input type="text" {...register('placeholder')} />
        <hr />
        <button type="submit"> 추가하기 </button>
      </form>

      <form action="">
        <label htmlFor="label">질문 주제</label> <br />
        <input type="text" name="label" />
        <br />
        <label htmlFor="option">옵션 명</label> <br />
        <input type="text" name="option" /> <br />
        <hr />
        <button>option 추가</button>
      </form>
    </>
  );
  function onChange(e) {
    setValue(e.target.value as valueType);
    console.log(e.target.value);
  }
  function onSubmit(data) {
    console.log(data);
  }
};

export default Build;
