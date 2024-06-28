import { create } from 'zustand';

const useTabStore = create((set, get) => ({
  inputKeyContents: [{ input1: 'title' }],
  activeTab: [],
  tabContents: [
    {
      id: 0,
      tabName: 'test',
      input1: 'input1',
      input2: 'input2',
      input3: 1500,
    },
  ],
  setInputKeyContents: (type, value) =>
    set({ inputKeyContents: [...get().inputKeyContents, { [type]: value }] }),

  action: {
    setInputKeyContents() {
      set((state) => {});
    },
    setActiveTab(tabName = 'tab') {
      set((state) => {
        // 에러 작성
        if (state.activeTab.includes(tabName)) {
          return state;
        } else {
          return {
            tabContents: [...state.tabContents, tabName],
          };
        }
      });
    },
    setRemoveTab(tabName = 'tab') {
      set({
        activeTab: get().activeTab.filter((tab) => tabName !== tab),
        // tabContents 배열에서 tabName 과 tabContents 객체의 tabName 과 동일하면 그 객체 삭제
      });
    },
    setTabContents(tabName, data) {
      set((state) => {
        state.tabContents.id = state.tabContents.length + 1;
        state.tabContents.tabName = tabName;
        state.tabContents.data = data;
        console.log('tabcontents', state.tabContents);
        return {
          tabContents: [...state.tabContents, state.tabContents],
        };
      });
    },
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