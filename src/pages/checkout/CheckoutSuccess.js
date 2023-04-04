import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <section>
      <div className="container">
        <h2>Checkout Successful</h2>
        <p>Thank you for your purchase</p>
        <br />
        <div className="--flex-start">
        <button className="--btn --btn-primary">
          <Link to="/">Back To Home</Link>
        </button>
        <button className="--btn --btn-primary">
          <Link to="/order-history">View Order Status</Link>
        </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;