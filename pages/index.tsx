import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toshkentov Umrzoq</title>
        <meta name="description" content="Toshkentov Umrzoq portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/umrzoq-toshkentov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Toshkentov Umrzoq
        </a>
      </footer>
    </div>
  )
}
