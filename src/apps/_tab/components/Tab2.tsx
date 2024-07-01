import useTabStore from '../store/useTabStore.ts';
import { useCallback, useEffect } from 'react';

const Tab2 = () => {
  // tab의 기술구현을 리팩토링함

  const {
    keyContents,
    savedContentsValue,
    setSavedTabContents,
    setKeyContents,
  } = useTabStore();

  // 비효율 상태업데이트 개선을위한 useCallback

  const updateKeyContent = useCallback(
    (id, value) => {
      setKeyContents((prev) =>
        prev.map((content) => (content.id ? { ...content, value } : content)),
      ); // batching 때문에 이전 상태값
    },
    [setKeyContents],
  );
  //
  // useEffect(() => {
  //   if (savedContentsValue.length > 0) {
  //     const updatedKeyContents = keyContents.map((content) => {
  //       const savedValue = savedContentsValue.find(
  //         (item) => item.name === `${content.type}Name${content.id}`,
  //       );
  //       if (savedValue) {
  //         return { ...content, value: savedValue.value };
  //       }
  //       return content;
  //     });
  //     setKeyContents(updatedKeyContents);
  //   }
  // }, [savedContentsValue]);
  //
  useEffect(() => {
    if (savedContentsValue.length > 0) {
      savedContentsValue.forEach((savedItem) => {
        const [type, id] = savedItem.split('Name');
        updateKeyContent(Number(id), savedItem.value);
      });
    }
  }, [savedContentsValue, updateKeyContent]);
  return (
    <>
      <h1>tab2입니다</h1>
      <hr />
      <form onSubmit={onSubmit}>
        {keyContents.map((content, index) => {
          if (content.type === 'select') {
            return (
              <div key={`select-container-${index}`}>
                <label htmlFor={`select${index}`}>{content.label}</label>
                <br />
                <select
                  name={`selectName${content.id}`}
                  id={`select${index}`}
                  // defaultValue 정적값 value = 렌더링이후 해당값을 변경하지않음
                  defaultValue={content.value || ''}
                >
                  {content.contents.map((option, optionIndex) => {
                    <option
                      value={option}
                      key={`option-${index}-${optionIndex}`}
                    >
                      {option}
                    </option>;
                  })}
                </select>
              </div>
            );
          } else if (content.type === 'input') {
            return (
              <div key={`input-container-${index}`}>
                <label htmlFor={`input${index}`}>{content.label}</label>
                <br />
                <input
                  type="text"
                  id={`input${index}`}
                  name={`inputName${content.id}`}
                  defaultValue={content.value || ''}
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

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    setSavedTabContents(data);
  }
};

export default Tab2;
