import { useRef } from "react";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import { SiWechat } from "react-icons/si";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_aaol7w2',
        "template_i5wczki",
        form.current,
        "Jjfbo_BOFtN_6vF4v"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
          console.log(form);
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
     
          <div className={styles.details}>
          <iframe title='location' width="500" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=7-9%20Percy%20St%2C%20Auburn%20NSW%202144+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+61 (02) 9789 1234</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>info@auhiper.com.au</p>
                </span>
                <span>
                  <GoLocation />
                  <p>U23/7-9 Percy St, Auburn NSW 2144.</p>
                </span>
                <span>
                  <SiWechat />
                  <p>au-hiper</p>
                </span>
              </div>
            </Card>
          </div>
          <div className={styles.details}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your active email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Send Message</button>
            </Card>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact