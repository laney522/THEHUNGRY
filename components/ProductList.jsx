import styles from "../styles/ProductList.module.css";
import ProductCard from './ProductCard';


const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST FOOD IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className={styles.wrapper}>
      {productList.map((product)=>(
          <ProductCard key={product._id} product={product}/>                
        ))}
      </div>
    </div>
  )
}

export default ProductList;