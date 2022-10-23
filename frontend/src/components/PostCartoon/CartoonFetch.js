import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './CartoonFetch.module.css'
import Cartoons from './Cartoons';

const CartoonFetch = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
    
  const fetchData = async () => {
    const API_URL = "https://rickandmortyapi.com/api/character"
    try {
      const response = await axios.get(API_URL);
      const copy = response.data.results;
        setItems(copy)
         console.log("cartoonsaxios", copy);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Rick and Morty</h1>
      <p>Rick and Morty has {items.length} items</p>
      <Cartoons cartoons={items} />
    </div>
  );
};

export default CartoonFetch