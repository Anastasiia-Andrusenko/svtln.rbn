import { Link } from 'react-router-dom';

import css from '../QuestionA/QuestionA.module.css';
import { motion } from "framer-motion";

const QuestionD = () => {
  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1}}
          className={css.main}>
          Then turn off the silent mode. <br />
          Make sure the sound is on.
        </motion.div>
        <div className={css.btns}>
          <Link to='/finish'>
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className={css.btn}>
              done
            </motion.div></Link>
        </div>
      </div>
    </div>
  </div>
}

export default QuestionD;