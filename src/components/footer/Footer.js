import React from 'react'
import styles from './Footer.module.scss'
const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return <div className={styles.footer}>
    Hiper Pty Ltd &copy; {year} All Rights Reserved.
    <p>Developed by: Danny Yang</p>
    </div>
};

export default Footer;