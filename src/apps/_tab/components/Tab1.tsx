import { FormEvent, useEffect, useState } from 'react';

const Tab1 = () => {
  const thisTabContent = {};
  const [tabContents, setTabContents] = useState(thisTabContent);

  const setValue = (inputName, value) => {
    setTabContents({
      ...tabContents,
      [inputName]: value,
    });
  };

  useEffect(() => {
    return () => {
      //
      console.log(tabContents);
    };
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input1 = formdata.get('input1');
    for (let [key, value] of formData.entries()) {
      console.log({ key, value });
    }
  }
  return (
    <>
      <h1>tab1</h1>
      <form onSubmit={handleSubmit}></form>
      <input name="input1" id="input1" type="text" value="" />
      <input name="" id="input2" type="text" value="" />
      <input name="" id="input3" type="text" value="" />
      <input name="" id="input4" type="text" value="" />
      <input name="" id="input5" type="text" value="" />
      <input name="" id="input6" type="text" value="" />
    </>
  );
};

export default Tab1;
