import useTabStore from '../store/useTabStore.ts';
import { useEffect, useState } from 'react';

const Tab1 = () => {
  const {
    keyContents,
    savedContentsValue,
    setSavedTabContents,
    tabContentsValue,
  } = useTabStore();
  const [contents, setContents] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    //data :
    console.log(data);
    // {네임 : 벨류 }
    setSavedTabContents(data);
    console.log('tabContentsValue', tabContentsValue);
  };

  // 초기값 불러오기
  // useEffect(() => {
  //   if (!Boolean(tabContentsValue)) {
  //     setContents([tabContentsValue]);
  //   } else {
  //     // savedCOntentsValue input에 넣기
  //     setContents(keyContents);
  //     console.log('contents', contents);
  //   }
  //   console.log('keyContents', keyContents);
  // }, [keyContents, savedContentsValue]);
  // 초기값 불러오기 2
  useEffect(() => {
    let newContents = [...keyContents];
    if (savedContentsValue.length > 0) {
      newContents = newContents.map((content) => {
        const savedValue = savedContentsValue.find(
          (i) => i.name === `${content.type}Name${content.id}`,
        );
        if (savedValue) {
          return { ...content, value: savedValue.value };
        }
        return content;
      });
    }
    setContents(newContents);
    console.log(contents);
  }, [keyContents, savedContentsValue]);

  //
  //TODO : unmount 시 가지고있는 input select 의 value 를 store로 이동.
  // mount 시 store 의 저장되어있는 벨류 있으면 그 벨류 가져오기
  //

  return (
    <>
      <h1>TAB입니다</h1>
      <hr />
      <form onSubmit={onSubmit}>
        {contents.map((content, index) => {
          if (content.type === 'select') {
            return (
              <div key={`select-container-${{ index }}`}>
                <label htmlFor={`select${index}`}>{content.label}</label>
                <br />
                <select
                  id={`select${index}`}
                  name={`selectName${index}`}
                  value={content.value || ''}
                >
                  {!!content.contents &&
                    content.contents.map((option, optionIndex) => (
                      <option
                        value={option}
                        key={`option-${index}-${optionIndex}`}
                      >
                        {option}
                      </option>
                    ))}
                </select>
              </div>
            );
          } else if (content.type === 'input') {
            return (
              <div key={`input-container-${{ index }}`}>
                <label htmlFor={`input${index}`}>{content.label}</label>
                <br />
                <input
                  type="text"
                  id={`input${index}`}
                  key={`input-${index}`}
                  name={`inputName${index}`}
                  value={content.value || ''}
                />
                <br />
              </div>
            );
          }
          return null;
        })}
        <button>fsubmit 버튼</button>
      </form>
    </>
  );
};

export default Tab1;
