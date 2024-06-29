import useTabStore from '../store/useTabStore.ts';
import { useEffect, useState } from 'react';

const Tab1 = () => {
  const { keyContents, savedContentsValue, tabContentsValue } = useTabStore();
  const [contents, setContents] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  useEffect(() => {
    console.log('tabContentsValue', Boolean(tabContentsValue));
    if (!Boolean(tabContentsValue)) {
      setContents([tabContentsValue]);
    } else {
      // savedCOntentsValue input에 넣기
      setContents(keyContents);
      console.log('contents', contents);
    }
    console.log('keyContents', keyContents);
  }, [keyContents, savedContentsValue]);

  //
  //TODO : unmount 시 가지고있는 input select 의 value 를 store로 이동.
  // mount 시 store 의 저장되어있는 벨류 있으면 그 벨류 가져오기
  //

  useEffect(() => {}, []);

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
                <select id={`select${index}`} name={`selectName${index}`}>
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
