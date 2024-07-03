import { create } from 'zustand';

type TODO = any;
const useTabStore2 = create<TODO>((set, get) => {
  return {
    formBuilderStore: {
      id: 0, // index
      type: 'input', // select,input
      label: 'input-title', // label
      contents: ['value'], // input : contents[0], select : contents[1,2,3...]
    },
  };
});
