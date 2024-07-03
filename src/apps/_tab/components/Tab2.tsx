import useTabStore from '../store/useTabStore.ts';
import { useEffect, useRef, useState } from 'react';

const Tab1 = () => {
  // keyContents: [{ id: 0, type: 'input', label: 'Input 1', contents: [''] }, { id: 1, type: 'select', label: 'Select 1', contents: ['옵션1', '옵션2'] }]
  // savedContentsValue: [{ inputName0: 'savedValue1', selectName1: '옵션1' }]
  const { keyContents, savedContentsValue, setSavedTabContents } =
    useTabStore();
  const formRef = useRef(null);
  // 렌더링할 컨텐츠를 저장할 state를 생성합니다.
  const [renderContents, setRenderContents] = useState([]);

  // form 제출 시 실행되는 함수입니다.
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

  // savedContentsValue가 변경될 때마다 실행되는 effect입니다.
  useEffect(() => {
    if (savedContentsValue.length === 0) {
      setRenderContents([]); // savedContentsValue가 없으면 렌더링하지 않습니다.
      return;
    }
    // savedContentsValue의 첫 번째 객체를 사용합니다.
    const savedData = savedContentsValue[0];
    // keyContents를 기반으로 렌더링할 컨텐츠를 생성합니다.
    const newRenderContents = keyContents.map((content) => {
      const savedValue = savedData[`${content.type}Name${content.id}`];

      if (content.type === 'select' && savedValue) {
        // select의 경우, 저장된 값이 현재 옵션에 있는지 확인합니다.
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
  // savedContentsValue가 없으면 null을 반환합니다.
  if (savedContentsValue.length === 0) return null;
  return (
    <>
      <h1>TAB입니다</h1>
      <hr />
      <form ref={formRef} onSubmit={onSubmit}>
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

export default Tab1;

// import useTabStore from '../store/useTabStore.ts';
// import { useCallback, useEffect } from 'react';
//
// const Tab2 = () => {
//   // tab의 기술구현을 리팩토링함
//
//   const {
//     keyContents,
//     savedContentsValue,
//     setSavedTabContents,
//     setKeyContents,
//   } = useTabStore();
//
//   // 비효율 상태업데이트 개선을위한 useCallback
//
//   const updateKeyContent = useCallback(
//     (id, value) => {
//       setKeyContents((prev) =>
//         prev.map((content) => (content.id ? { ...content, value } : content)),
//       ); // batching 때문에 이전 상태값
//     },
//     [setKeyContents],
//   );
//   //
//   // useEffect(() => {
//   //   if (savedContentsValue.length > 0) {
//   //     const updatedKeyContents = keyContents.map((content) => {
//   //       const savedValue = savedContentsValue.find(
//   //         (item) => item.name === `${content.type}Name${content.id}`,
//   //       );
//   //       if (savedValue) {
//   //         return { ...content, value: savedValue.value };
//   //       }
//   //       return content;
//   //     });
//   //     setKeyContents(updatedKeyContents);
//   //   }
//   // }, [savedContentsValue]);
//   //
//   useEffect(() => {
//     if (savedContentsValue.length > 0) {
//       savedContentsValue.forEach((savedItem) => {
//         const [type, id] = savedItem.split('Name');
//         updateKeyContent(Number(id), savedItem.value);
//       });
//     }
//   }, [savedContentsValue, updateKeyContent]);
//   return (
//     <>
//       <h1>tab2입니다</h1>
//       <hr />
//       <form onSubmit={onSubmit}>
//         {keyContents.map((content, index) => {
//           if (content.type === 'select') {
//             return (
//               <div key={`select-container-${index}`}>
//                 <label htmlFor={`select${index}`}>{content.label}</label>
//                 <br />
//                 <select
//                   name={`selectName${content.id}`}
//                   id={`select${index}`}
//                   // defaultValue 정적값 value = 렌더링이후 해당값을 변경하지않음
//                   defaultValue={content.value || ''}
//                 >
//                   {content.contents.map((option, optionIndex) => (
//                     <option
//                       value={option}
//                       key={`option-${index}-${optionIndex}`}
//                     >
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             );
//           } else if (content.type === 'input') {
//             return (
//               <div key={`input-container-${index}`}>
//                 <label htmlFor={`input${index}`}>{content.label}</label>
//                 <br />
//                 <input
//                   type="text"
//                   id={`input${index}`}
//                   name={`inputName${content.id}`}
//                   defaultValue={content.value || ''}
//                 />
//                 <br />
//               </div>
//             );
//           }
//           return null;
//         })}
//         <button type="submit">submit 버튼</button>
//       </form>
//     </>
//   );
//
//   function onSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData);
//     setSavedTabContents(data);
//   }
// };
//
// export default Tab2;
