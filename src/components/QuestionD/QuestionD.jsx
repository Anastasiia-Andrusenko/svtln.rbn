import { Link } from 'react-router-dom';

import css from '../QuestionA/QuestionA.module.css';

const QuestionD = () => {
  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <div className={css.main}>
          Then turn off the silent mode. Make sure the sound is on
        </div>
        <div className={css.btns}>
          <Link to='/finish'><div className={css.btn}>done</div></Link>
        </div>
      </div>
    </div>
  </div>
}

export default QuestionD;