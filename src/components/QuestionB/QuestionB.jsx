
import { Link } from 'react-router-dom';
import css from '../QuestionA/QuestionA.module.css';

const QuestionB = () => {
  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <div className={css.main}>
          What did you feel the most this year ?
        </div>
        <div className={css.btns}>
          <Link to='/question-c'><div className={css.btn}>Pain</div></Link>
          <Link to='/question-c'><div className={css.btn}>Pain</div></Link>
        </div>
      </div>
    </div>
  </div>
}

export default QuestionB;