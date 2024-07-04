import { useState } from 'react';
import { useForm } from 'react-hook-form';

type valueType = 'input' | 'select' | null;
type InputType = {
  label: string;
  placeholder: string;
  option: string;
};
type FormType = {
  id: number;
  type: valueType;
  label: string;
  placeholder: string;
  option?: string;
};
type FormList = FormType[];

const Build = () => {
  const [value, setValue] = useState<valueType>(null);
  const [formList, setFormList] = useState<FormList>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputType>();
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
        <input type="text" {...register('label', { required: true })} />
        {errors.label && <span>{'  '}질문을 입력하셔야합니다.</span>}
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

      <ul>
        {formList.map((form) => (
          <li key={form.id}>
            {form.label} {form.placeholder} {form.type}
          </li>
        ))}
      </ul>
    </>
  );
  function onChange(e) {
    setValue(e.target.value as valueType);
    console.log(e.target.value);
  }
  function onSubmit({ label, placeholder }) {
    console.log(label, placeholder);
    const formData = {
      id: 0,
      type: value,
      label,
      placeholder,
    };
    setFormList([...formList, formData]);
  }
};

export default Build;
