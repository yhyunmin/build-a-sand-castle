import style from '../style/date.module.css';

const Dates = ({ h3, p, text = '' }: { h3: string; p: any; text?: string }) => {
  return (
    <>
      <div className={style.box}>
        <h3>{h3}</h3>
        <p>{p}</p>
        <hr />
        <hr />
        <hr />
        <span>{text}</span>
      </div>
    </>
  );
};

export default Dates;
