
import { Link } from 'react-router-dom';
import css from './QuestionA.module.css';

const QuestionA = () => {
  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <div className={css.main}>
          How was your year ?
        </div>
        <div className={css.btns}>
          <Link to='/question-b'><div className={css.btn}>Bad</div></Link>
          <Link to='/question-b'><div className={css.btn}>Huevo</div></Link>
        </div>
      </div>
    </div>
  </div>
}

export default QuestionA;