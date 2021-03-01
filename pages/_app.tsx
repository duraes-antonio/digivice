import '../styles/globals.css';
import React from 'react';
import { Header } from '../components/header-items/header/header';
import { Footer } from '../components/footer/footer';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { motion } from 'framer-motion';

const MyApp = ({ Component, pageProps, router }): JSX.Element => (
  <>
    <Head>
      <title>Digivice</title>
      <link rel="icon" href="/favicon.png" />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>

    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </main>
      <Footer />
    </div>
  </>
);

export default MyApp;
