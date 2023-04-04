import React, { useEffect } from 'react'
import Product from '../../components/product/Product'
import LatestNews from '../../components/latestNews/LatestNews';
import SignUp from '../../components/signUp/SignUp';
import InfoBar from '../../components/infoBar/InfoBar';

const Home = () => {
  const url=window.location.href
  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
        return;
      }
    };
    scrollToProducts();
  }, [url]);
  return (
    <div>
    
      <Product />
<LatestNews />  
<SignUp />
<InfoBar/>
    </div>
  )
}

export default Home