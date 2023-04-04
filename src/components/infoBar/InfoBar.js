import React from 'react'
import Card from '../card/Card'
import styles from './InfoBar.module.scss'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { SiWechat } from "react-icons/si";
import { GoLocation } from 'react-icons/go'
const InfoBar = () => {
  return (
    <div className="container">
    <div className={styles.content}>
        <Card cardClass={styles.grid} >
                <h3>Infomation</h3>
                <ul>
                    <li><a href="#about">About Us</a> </li>
                    <li><a href="#delivery">Delivery</a></li>
                    <li><a href="#policy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms & Condition</a></li>
                    <li><a href="faq">FAQs</a></li>
                </ul>
            </Card>
            <Card cardClass={styles.grid} >
                <h3>Services</h3>
                <ul>
                    <li><a href="#payments">Payments</a></li>
                    <li><a href="#returns">Returns</a> </li>
                    <li><a href="#warranty">Warranty</a></li>
                    <li><a href="#site">Site Map</a></li>
                </ul>
                </Card>
            <Card cardClass={styles.grid} >
                <h3>My Account</h3>
                <ul>
                    <li><a href="accout">Account</a></li>
                    <li><a href="#order">Order History</a> </li>
                    <li><a href="#wish">Wish List</a></li>
                    <li><a href="#newsletter">Newsletter</a></li>
                    <li><a href="#loyal">Loyal Programme</a></li>

                </ul>
               </Card>
            <Card cardClass={styles.grid} >
                <h3>Contact Us</h3>
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
    </div>
  )
}

export default InfoBar