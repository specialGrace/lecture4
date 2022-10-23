import React from 'react'
import Cartoon from './Cartoon'
import  styles from './Cartoons.module.css'

const Cartoons = ({cartoons}) => {
  return (
    <div className={styles.cartoons}>
      {cartoons.length > 0 && cartoons.map((cartoon, index)=> <Cartoon cartoon={cartoon} key={index} />)}
    </div>
  )
}

export default Cartoons
