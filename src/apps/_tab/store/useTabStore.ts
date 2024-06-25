import { create } from 'zustand';

const useTabStore = create((set, get) => ({
  tagList: [],
  tabContents: {},
  action: {
    setTagList: (tabs) => {},
  },
}));

export default useTabStore;

// 빈탭 목록이있고
// 활성화했던 탭은 태그리스트에 들어감
// 탭삭제를 누르면 태그리스트에서 제거됨 (filter)
// 활성화된 탭의 input 들은 태그리스트 객체에 들어감

const exampleTab: tabType = {
  tabName: 'tab',
  inputValue1: 'input1',
  inputValue2: 'input2',
  inputValue3: 1500,
};
// 탭 활성화 시 input 작성시 value 가 활성화 탭 데이터에 들어감

type tabType = {
  readonly tabName: string;
  [key: string]: string | number;
};
