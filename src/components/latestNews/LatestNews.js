import React, { useEffect } from 'react'
import useFetchCollection from '../../customHooks/useFetchCollection';
import { useDispatch, useSelector } from 'react-redux';
import styles from './LatestNews.module.scss';
import { STORE_NEWS, selectNews } from '../../redux/slice/newsSlice';
import Loader from '../loader/Loader';
import Card from '../card/Card';
import { Link } from 'react-router-dom';
import { FcCalendar } from "react-icons/fc";

const LatestNews = () => {
    const {data, isLoading} = useFetchCollection('news');
    const publishedNews = useSelector(selectNews)
  const slicedNews=publishedNews.slice(0,3)
    const dispatch= useDispatch()
    useEffect(() => {
      dispatch(STORE_NEWS(data))
    }, [dispatch, data])
    const shortenText = (text, n) => {
        if (text.length > n) {
          const shortenedText = text.substring(0, n).concat("...");
          return shortenedText;
        }
        return text;
      };
  return (
    <>
    {isLoading && <Loader />}
             <div className="container">

               <h3> Latest News</h3>
               <div className={styles.content}>
               {slicedNews.length === 0 ? (
                 <p>No order found</p>
               ) : (
                <div className={styles.content}>
                       {slicedNews.map((publish, index) => {
                        const {id, title, imageURL, newsText,createdAt} = publish;
                          return (
                            <Card cardClass={styles.grid} key={id}>
                            <Link to={`/news-details/${id}`}>
                              <div className={styles.img}>
                                <img src={imageURL} alt={title} />
                              </div>
                            </Link>
                          
                              <div className={styles.details}>
                                <h4 className={styles.calendar}><FcCalendar /> {createdAt.toDate().toString().split('G')[0]}</h4>
                                <h4>{shortenText(title, 24)}</h4>
                             
                              </div>
                              <p className={styles.desc}>{shortenText(newsText, 200)}</p>
                        
                              <a
                                className={styles.readMore}
                              href={`/news-details/${id}`}
                              >
                                Read More...
                              </a>
                        
                          </Card>
                          );
                         })
                         }
                </div>                     
  )
                        }
                      </div>  
            </div>
    </>
        )
}

export default LatestNews