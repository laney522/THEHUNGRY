import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Hungry in Newyork</title>
        <meta name="description" content="Best shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    </div>
  )
}
