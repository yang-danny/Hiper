import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import useFetchDocument from '../../customHooks/useFetchDocument';
import styles from './NewsDetails.module.scss';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';
import spinnerImg from "../../assets/spinner.jpg";
const NewsDetails = () => {
    const { id } = useParams();
    const [selectNews, setSelectNews] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const {document}=useFetchDocument('news',id)
    useEffect(() => {
        setSelectNews(document)
        setIsLoading(true)
       }, [document])
  return (
    <>
    {isLoading===false ? <Loader />:(
      <section>
    <div className={`container ${styles.newsDetails}`}>
      <h2>News Details</h2>
      <div>
        <Link to="/">&larr; Back To Home</Link>
      </div>
          <div className={styles.details}>  
            {selectNews === null ? (
        <img src={spinnerImg} alt="Loading" style={{ width: "50px" }} />
      ) : (
        <>
            <h3>{selectNews.title}</h3>
        <div className={styles.img}>
              <img src={selectNews.imageURL} alt={selectNews.title} />
            </div>
            <div className={styles.content}>
          
             
              <p> {selectNews.newsText}</p>
             
              </div> 
              </>
             )}
            </div> 
    </div>
  </section>
    )}  
  </>
  )
}

export default NewsDetails