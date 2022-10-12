import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro.js'
import ImageSlider from '../components/ImageSlider.js'
import BuildingList from '../components/BuildingList.js'


export default function Home() {
  return (
    <div className='mainDiv'>
    <Head>
    <link rel="preload" as="image" href="/habitat-67/img-01.jpeg" />
    </Head>
      <section className={styles.main}>
        <Intro />
        <ImageSlider />
      </section>
      <section>
        <BuildingList />
      </section>
    </div>
  )
}
