import css from '../QuestionA/QuestionA.module.css';

const Finish = () => {
  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <div className={css.poem}>
          Roses are red, <br/>
          Violets are blue,<br/>
          here is a bottle<br/>
          that waiting for you...<br/>
        </div>
      </div>
    </div>
  </div>
}

export default Finish;