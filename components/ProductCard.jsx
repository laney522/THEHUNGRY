import styles from "../styles/ProductCard.module.css";
import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>VIORI DE RUCCA</h1>
      <span className={styles.price}>$18.90</span>
      <p className={styles.desc}>
        Vivamus non est pretium, euismod magna eget.
      </p>
    </div>
  )
}

export default ProductCard;
