import { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import useFormStore from '../store/useFormStore.ts';
import { useShallow } from 'zustand/react/shallow';

type valueType = 'input' | 'select' | '';

type FormKeyType = string | number | valueType;

// Record로 바꿔보기
// type InputKeyType = 'label' | 'placeholder' | 'option' | 'id' | 'type';

type InputType = {
  label: string;
  placeholder?: string;
  option?: string;
};

export type FormType = InputType & {
  id: number;
  type: valueType;
};

export type FormType2 = Record<string, FormKeyType>;
type FormList = FormType[];

const Build = () => {
  const [value, setValue] = useState<valueType>('');
  // const [formList, setFormList] = useState<FormList>([]);
  // const formList = useFormStore((state) => state.formList);
  // const { formList, setFormList } = useFormStore(
  //   (state) => ({
  //     formList: state.formList,
  //     setFormList: state.action.setFormList,
  //   }),
  //   shallow,
  // );
  // 리렌더링 방지(최적화를 위한)
  // shallow 보단 useShallow 를 권장 (최신)
  const { formList, setFormList } = useFormStore(
    useShallow((state) => (state.store.formList, state.action.setFormList)),
  );
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
    const formData: FormType2 = {
      id: 0,
      type: value,
      label,
      placeholder,
    };
    setFormList([...formList, formData]);
  }
};

export default Build;
