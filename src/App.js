import { BrowserRouter,Route, Routes } from "react-router-dom";
import {Header,Footer} from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Home,Cart,Contact,Admin,OrderHistory,Login, Register, Reset,} from './pages/index'
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import CheckoutDetails from "./pages/checkout/CheckoutDetails";
import Checkout from "./pages/checkout/Checkout";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import OrderDetails from "./pages/orderDetails/OrderDetails";
import ReviewProducts from "./components/reviewProducts/ReviewProducts";
import NotFound from "./pages/notFound/NotFound";
import NewsDetails from "./components/latestNews/NewsDetails";
function App() {

  return (
    <>
     <BrowserRouter>
     <ToastContainer />
     <Header />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/admin/*" element={
        <AdminOnlyRoute>
      <Admin />
      </AdminOnlyRoute>
      } />
       <Route path="/product-details/:id" element={<ProductDetails />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/checkout-details" element={<CheckoutDetails />} />
       <Route path="/checkout" element={<Checkout />} />
       <Route path="/checkout-success" element={<CheckoutSuccess />} />
       <Route path="/order-history" element={<OrderHistory />} />
       <Route path="/order-details/:id" element={<OrderDetails />} />
       <Route path="/review-product/:id" element={<ReviewProducts />} />
       <Route path="*" element={<NotFound />} />
       <Route path="/news-details/:id" element={<NewsDetails />} />

     </Routes>
     <Footer />
     </BrowserRouter>

    </>
  );
}

export default App;