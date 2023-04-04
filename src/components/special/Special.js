import React, { useEffect } from 'react'
import styles from './Special.module.scss'
import { MdOutlineLocalOffer } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";
import {
    STORE_PRODUCTS,
    selectProducts,
  } from "../../redux/slice/productSlice";
import { Link } from 'react-router-dom';
import Card from '../card/Card';
const Special = () => {
    const products=useSelector(selectProducts)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch( STORE_PRODUCTS({products}));
    }, [dispatch, products]);
    const slicedProducts=products.slice(0,4)
    const shortenText = (text, n) => {
        if (text.length > n) {
          const shortenedText = text.substring(0, n).concat("...");
          return shortenedText;
        }
        return text;
      };
  return (
    <div className={styles.special}>
       <h3>Special  <MdOutlineLocalOffer /></h3>
       {slicedProducts.length ===0 ?(
                 <p>No order found</p>
               ) : (
                <>
                {slicedProducts.map((product) => {
                    const {id, name, price, imageURL}=product
                    return (
                      <div key={product.id}>
                       <Card cardClass={styles.grid}>
      <Link to={`/product-details/${id}`}>
        <div className={styles.img}>
          <img src={imageURL} alt={name} />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <h4>{shortenText(name, 20)}</h4>
          <p>{`$${price}`}</p>
        </div>
      </div>
    </Card>
                      </div>
                    );
                  })}
                
                </>
               )}
        </div>
  )
}

export default Special