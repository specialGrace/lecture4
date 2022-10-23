import React from 'react'
import styles from './Cartoon.module.css'
import { FaLocationArrow } from 'react-icons/fa'
import { BsPersonCircle, BsCalenderDate } from "react-icons/bs";

const Cartoon = ({cartoon}) => {
  return (
    <div className={styles.cartoon}>
      <div>
        <h3 className={styles.head}>{cartoon.name}</h3>
        <img src={cartoon.image} alt={cartoon.name} className={styles.img} />
      </div>
      <div className={styles.paragraph}>
        <p>
          <FaLocationArrow className={styles.icons} />
          Location(s):
          {typeof cartoon.location !== "undefined" &&
            Object.keys(cartoon.location).map((key, i) => (
              <li className={styles.list} key={i}>
                {cartoon.location[key]}
              </li>
            ))}
        </p>
        <p>
          <BsPersonCircle className={styles.icons} />
          Gender: {cartoon.gender}
        </p>

        <p>
          {/* <BsCalenderDate className={styles.icons} />  */} Created On:
          {cartoon.created}
        </p>
      </div>
    </div>
  );
}

export default Cartoon