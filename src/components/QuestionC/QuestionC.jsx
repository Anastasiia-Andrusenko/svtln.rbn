import { Link } from 'react-router-dom';

import css from '../QuestionA/QuestionA.module.css';
import { motion } from "framer-motion";

const QuestionC = () => {
  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1}}
          className={css.main}>
          Do you want us to take care of you ?
        </motion.div>
        <div className={css.btns}>
          <Link to='/finish'>
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className={css.btn}>
              Yes
            </motion.div>
          </Link>
          <Link to='/finish'>
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className={css.btn}>
              Yes please
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  </div>
}

export default QuestionC;