import styles from "./ImageSlider.module.css";
import buildings from "../data/data.json";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imagesForSlider = buildings.map((b) => b.images[0]);
const buildingSlugs = buildings.map((b) => b.building.replaceAll(" ", "-"));
let timers = []

export default function ImageSlider() {
  const [imgIndex, setImgIndex] = useState(0);
  const [hasMobileView, setHasMobileView] = useState(true);
  const [arrowBeingHoveredLeft, setArrowBeingHoveredLeft] = useState(false);
  const [arrowBeingHoveredRight, setArrowBeingHoveredRight] = useState(false);
  const divElement = useRef(null);

useEffect(() => {
  if (!("ontouchstart" in document.documentElement)){
    setHasMobileView(false)
  }
}, [])

useEffect(() => {
    while(timers.length){
        clearTimeout(timers.pop())
    }
    timers.push(setTimeout(() => {
        nextImage();
      }, 3000))
}, [imgIndex])

  function nextImage() {
    if (imgIndex === imagesForSlider.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  }

  function prevImage() {
    if (imgIndex === 0) {
      setImgIndex(imagesForSlider.length - 1);
    } else {
      setImgIndex(imgIndex - 1);
    }
  }

  return (
    <div className={styles.sliderDiv}>
      <AnimatePresence>
        <Link href={`/buildings/${buildingSlugs[imgIndex]}`}>
          <motion.img
            key={imagesForSlider[imgIndex]}
            className={styles.sliderImg}
            // width="100%"
            // height="100%"
            src={imagesForSlider[imgIndex]}
            initial={hasMobileView ? false : { x: 200, opacity: 0 }}
            animate={hasMobileView ? false : { x: 0, opacity: 1 }}
            exit={hasMobileView ? false : { x: -200, opacity: 0 }}
            transition={{
              // delay: 0.5,
              opacity: { duration: 0.5 },
              default: { ease: "linear" },
            }}
          />
        </Link>
      </AnimatePresence>
      <div className={styles.textSection}>
        <div className={styles.sliderControls}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            onMouseEnter={() => setArrowBeingHoveredLeft(true)}
            onMouseLeave={() => setArrowBeingHoveredLeft(false)}
            src={
              arrowBeingHoveredLeft === false
                ? "/arrow-left.svg"
                : "/arrow-left-orange.svg"
            }
            width={26}
            height={20}
            onClick={prevImage}
          />
          <motion.img
            whileHover={{ scale: 1.2 }}
            onMouseEnter={() => setArrowBeingHoveredRight(true)}
            onMouseLeave={() => setArrowBeingHoveredRight(false)}
            className={styles.rightArrow}
            src={
              arrowBeingHoveredRight === false
                ? "/arrow.svg"
                : "/arrow-orange.svg"
            }
            width={26}
            height={20}
            onClick={nextImage}
          />
        </div>
        <Link href={`/buildings/${buildingSlugs[imgIndex]}`}>
          <motion.span whileHover={{ scale: 1.2 }}>
            {buildings[imgIndex].building}
          </motion.span>
        </Link>
      </div>
    </div>
  );
}

// <div
// style={{
//     backgroundImage: `url(${imagesForSlider[imgIndex]})`
// }} className={styles.divStyle}
// ref={divElement}
// >
// </div>
