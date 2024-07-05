import { create } from 'zustand';
import { FormType, FormType2 } from '../components/Build.tsx';

type TODO = any;
// // -------- 레코드 타입 --------
// type MenuRecord = Record<string, number>;
//
// const menuRecord: MenuRecord = {
//   hamburger: 100,
//   pizza: 200,
// };
//
// // -------- 인덱스 시그니처 --------
// type Menu = {
//   [key: string]: number;
// };
//
// const menu: Menu = {
//   hamburger: 100,
//   pizza: 200,
// };

type FormStoreType = {
  store: {
    formList: FormType2[];
  };
  action: {
    [key: TODO]: (data: TODO) => void;
    setFormList: (data: TODO) => void;
  };
};

// FormType = {
//   id: number;
//   type: valueType;
//   label: string;
//   placeholder: string;
//   option?: string;
// };

const useFormStore = create<FormStoreType>((set, get) => {
  return {
    store: {
      formList: [
        {
          id: 0,
          type: 'input',
          label: '이름',
          placeholder: '이름을 입력해 주세요.',
        },
      ],
    },
    action: {
      setFormList: (data) =>
        set((state) => ({
          store: { formList: [...state.store.formList, data] },
        })),
    },
  };
});

export default useFormStore;
