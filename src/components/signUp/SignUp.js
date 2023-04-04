import React from 'react'
import emailjs from "@emailjs/browser";
import styles from './SignUp.module.scss';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useRef } from "react";
import { toast } from 'react-toastify';
const SignUp = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_aaol7w2',
      "template_h4wbf4v",
      form.current,
      "Jjfbo_BOFtN_6vF4v"
    )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
    <div className='container'>
<div className={styles.content}>
<form ref={form} onSubmit={sendEmail} className={styles.subForm}>
<p><MdOutlineMarkEmailRead size={20}/> Sign Up For Newslatter</p>       
                <input ref={form}  type="email"
                name="user_email"
                placeholder="Your Email Address"
                required
               />  
                    <button type="submit" >Subscribe</button>
                    </form>
                </div>
          
        </div>
        </>
  )
}

export default SignUp