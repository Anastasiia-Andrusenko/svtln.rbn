import { Link } from "react-router-dom";

import css from "./Welcome.module.css";
import { motion } from "framer-motion";



const Welcome = () => {
  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2}}
          className={css.main}>
          Svetlana,
          welcome to new you...
        </motion.div>
        <Link to='/question-a'>
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className={css.btn}>
            Download
          </motion.div>
        </Link>
      </div>
    </div>
  </div>
}

export default Welcome;