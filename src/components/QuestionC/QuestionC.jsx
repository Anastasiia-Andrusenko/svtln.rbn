import { Link } from 'react-router-dom';

import css from '../QuestionA/QuestionA.module.css';

const QuestionC = () => {
  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <div className={css.main}>
          Do you want us to take care of you?
        </div>
        <div className={css.btns}>
          <Link to='/question-d'><div className={css.btn}>Yes</div></Link>
          <Link to='/question-d'><div className={css.btn}>Yes please</div></Link>
        </div>
      </div>
    </div>
  </div>
}

export default QuestionC;