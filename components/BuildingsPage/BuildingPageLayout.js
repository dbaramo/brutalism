import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./BuildingPage.module.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function BuildingPageLayout(props) {
  let { architect, building, city, country, description, images } = props.data;
  const [imgIndex, setImgIndex] = useState(0);
  const imgsDiv = useRef(null);

  useEffect(() => {
    // -- ANIMATION CODE HERE --
    let ctx = gsap.context(() => {
      let targets = gsap.utils.toArray(".building-imgs");

      // gsap.to(".building-imgs", {
      //   y: "-=500",
      //   duration: 5
      // })
    }, imgsDiv);
  }, []);

  function nextImage() {
    if (imgIndex === images.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  }

  function prevImage() {
    if (imgIndex === 0) {
      setImgIndex(images.length - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  }

  return (
    <>
      <Head>
        <title>{building}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.mainDiv}>
          <Link href={`/`}>
            <img className={`${styles.homeBtn} ${styles.homeArrowAnimation}`} src="/arrow-left.svg" />
          </Link>
          <div className={styles.metaData}>
            <h1 className={styles.topHalfIntro}>{building}</h1>
            <span className={styles.topHalfIntro}>Location: </span>
            <span className={styles.topHalfIntro}>
              {city}, {country}
            </span>
          </div>
          <div className={styles.metaData}>
            <span className={styles.topHalfIntro}>Architect: </span>
            <span className={styles.topHalfIntro}>{architect}</span>
          </div>
          <div className={styles.imageContainer}>
            <img className={`${styles.buildingImg}`} src={images[imgIndex]} />
            <div className={styles.arrowsDiv}>
              <img
                onClick={prevImage}
                className={`${styles.leftArrow} ${styles.topHalfIntro}`}
                src="/arrow-left-khaki.svg"
                width={26}
                height={20}
              />
              <img
                onClick={nextImage}
                className={`${styles.rightArrow} ${styles.topHalfIntro}`}
                src="/arrow-right-khaki.svg"
                width={26}
                height={20}
              />
            </div>
          </div>
          <div className={styles.description}>
            <motion.p 
            className={styles.descriptionAnimation}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
