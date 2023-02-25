import css from '../QuestionA/QuestionA.module.css';
import { motion } from "framer-motion";


const Finish = () => {

  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2}}
          className={css.poem}>
          Roses are red, <br/>
          Violets are blue,<br/>
          here is a box<br/>
          that waiting for you...<br/>
        </motion.div>
      </div>
    </div>
  </div>
}

export default Finish;