import { Link } from "react-router-dom";

import css from "./Welcome.module.css";

const Welcome = () => {
  return <div className={css.container}>
    <div className={css.background}>
      <div className={css.text}>
        <div className={css.circle}></div>
        <div className={css.main}>
          Svetlana,
          welcome to new you...
        </div>
        <Link to='/question-a'>
          <div className={css.btn}>Download</div>
        </Link>
      </div>
    </div>
  </div>
}

export default Welcome;