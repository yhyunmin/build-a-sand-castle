import { create } from 'zustand';

type TODO = any;

//
type TabStore = {
  formStore: FormBuilder[];
  action: {
    setFormStore(
      type: 'select' | 'input',
      data: { [key: string]: string },
    ): void;
  };
};

type FormBuilder = {
  id: number;
  type: string;
  label: string;
  contents: string[];
};
//

const useTabStore2 = create<TabStore>((set, get) => {
  return {
    // array
    formStore: [
      {
        id: 0, // index
        type: 'input', // select,input
        label: 'input-title', // label
        contents: ['value'], // input : contents[0], select : contents[1,2,3...]
      },
    ],
    action: {
      setFormStore(type, data, contents) {
        // data : {inputTitleName: 'labelName', inputContentsName: 'value'}
        if (type === 'select') {
          return set({
            formStore: [
              ...get().formStore,
              {
                id: get().formStore.length,
                type: 'select',
                label: data['inputTitleName'],
                contents: data['inputContentsName'].split(', '),
              },
            ],
          });
        } else if (type === 'input') {
          return set({
            formStore: [
              ...get().formStore,
              {
                id: get().formStore.length,
                type: 'input',
                label: data['inputTitleName'],
                contents: data['inputContentsName'].split(', '),
              },
            ],
          });
        }
      },
    },
  };
});
