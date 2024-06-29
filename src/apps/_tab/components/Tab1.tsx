import useTabStore from '../store/useTabStore.ts';
import { useEffect, useState } from 'react';
import { use } from 'msw/lib/core/utils/internal/requestHandlerUtils';

const Tab1 = () => {
  const { keyContents } = useTabStore();
  const [contents, setContents] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  useEffect(() => {
    setContents(keyContents);
    console.log('keyContents', keyContents);
  }, [keyContents]);

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
