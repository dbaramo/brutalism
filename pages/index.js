import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro.js'
import ImageSlider from '../components/ImageSlider.js'
import BuildingList from '../components/BuildingList.js'
import buildings from '../data/data.json'

const buildingImages = []
buildings.forEach((b) => buildingImages.push(...b.images))

export default function Home() {
  return (
    <div className='mainDiv'>
    <Head>
    {buildingImages.map((img) => {
      return <link key={img} rel="preload" as="image" href={img} />
    })}
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
