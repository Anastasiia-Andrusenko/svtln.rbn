
import { Link } from 'react-router-dom';
import css from '../QuestionA/QuestionA.module.css';
import { motion } from "framer-motion";

const QuestionB = () => {
  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1}}
          className={css.main}>
          What did you feel the most this year ?
        </motion.div>
        <div className={css.btns}>
          <Link to='/question-c'>
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className={css.btn}>
              Pain
            </motion.div>
          </Link>
          <Link to='/question-c'>
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className={css.btn}>
              Pain
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  </div>
}

export default QuestionB;