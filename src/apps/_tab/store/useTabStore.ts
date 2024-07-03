import { create } from 'zustand';

const useTabStore = create((set, get) => ({
  keyContents: [
    {
      id: 0,
      type: 'input',
      label: 'input-title',
      contents: ['value'],
    },
    {
      id: 1,
      type: 'select',
      label: 'select-label',
      contents: ['5G', 'LTE'],
    },
  ],
  // 탭 전환 데이터 유지
  savedContentsValue: [
    {
      inputName0: 'test',
      selectName1: 'LTE',
    },
  ],
  setSavedTabContents: (data) => {
    set({ tabContentsValue: data });
  },

  setInputKeyContents: (type, value) =>
    set({ inputKeyContents: [...get().inputKeyContents, { [type]: value }] }),

  setKeyContents: (type, label, contents) => {
    if (type === 'input') {
      set({
        keyContents: [
          ...get().keyContents,
          { id: get().keyContents.length, label, type, contents, value: '' },
        ],
      });
    } else if (type === 'select') {
      set({
        keyContents: [
          ...get().keyContents,
          { id: get().keyContents.length, label, type, contents, value: '' },
        ],
      });
    }
  },
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
