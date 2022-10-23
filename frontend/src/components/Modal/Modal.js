import React from 'react'
import styles from './Modal.module.css'

const Modal = ({title,children}) => {
  return (
    <div className={styles.modalContainer}>
        <div className={styles.modal}>
            <h4 className={styles.modalTitle}>{title}</h4>
            <div className={styles.modalBody}>{children}</div>
        </div>
    </div>
  )
}

export default Modal
