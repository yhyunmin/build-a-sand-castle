import { useForm } from 'react-hook-form';

const Tab4 = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <h1>Tab4</h1>
      <form onSubmit={handleSubmit}></form>
    </>
  );
};

export default Tab4;
