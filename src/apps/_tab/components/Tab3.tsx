import useTabStore from '../store/useTabStore.ts';
import { useEffect, useRef, useState } from 'react';

const Tab3 = () => {
  const { keyContents, savedContentsValue, setSavedTabContents } =
    useTabStore();
  const [formDatas, setFormDatas] = useState();
  const formRef = useRef(formDatas);
  const [renderContents, setRenderContents] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    saveData();
  };

  async function saveData() {
    console.log(formRef.current);
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      // const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData);
      // data: { inputName0: 'newValue1', selectName1: '옵션2' }
      await setSavedTabContents([data]); // savedContentsValue를 업데이트합니다.
    }
    console.log(savedContentsValue);
  }

  useEffect(() => {
    if (savedContentsValue.length === 0) {
      setRenderContents([]); // savedContentsValue가 없으면 렌더링하지 않습니다.
      return;
    }
    const savedData = savedContentsValue[0];
    const newRenderContents = keyContents.map((content) => {
      const savedValue = savedData[`${content.type}Name${content.id}`];

      if (content.type === 'select' && savedValue) {
        const isValidOption = content.contents.includes(savedValue);
        return {
          ...content,
          value: isValidOption ? savedValue : '',
        };
      }

      return {
        ...content,
        value: savedValue || '',
      };
    });
    setRenderContents(newRenderContents);
  }, [keyContents, savedContentsValue]);

  useEffect(() => {
    console.log('mounted');
    return () => {
      saveData();
    };
  }, []);
  if (savedContentsValue.length === 0) return null;
  return (
    <>
      <h1>TAB입니다</h1>
      <hr />
      <form onSubmit={onSubmit}>
        {renderContents.map((content) => {
          if (content.type === 'select') {
            return (
              <div key={`select-container-${content.id}`}>
                <label htmlFor={`select${content.id}`}>{content.label}</label>
                <br />
                <select
                  id={`select${content.id}`}
                  name={`selectName${content.id}`}
                  defaultValue={content.value}
                >
                  {content.contents.map((option, optionIndex) => (
                    <option
                      value={option}
                      key={`option-${content.id}-${optionIndex}`}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          } else if (content.type === 'input') {
            return (
              <div key={`input-container-${content.id}`}>
                <label htmlFor={`input${content.id}`}>{content.label}</label>
                <br />
                <input
                  type="text"
                  id={`input${content.id}`}
                  name={`inputName${content.id}`}
                  defaultValue={content.value}
                />
                <br />
              </div>
            );
          }
          return null;
        })}
        <button type="submit">submit 버튼</button>
      </form>
    </>
  );
};

export default Tab3;
