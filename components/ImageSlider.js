import styles from "./ImageSlider.module.css";
import buildings from "../data/data.json";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const imagesForSlider = buildings.map((b) => b.images[0])
const buildingSlugs = buildings.map((b) => b.building.replaceAll(" ", "-"))


export default function ImageSlider(){
    const [imgIndex, setImgIndex] = useState(0);
    const divElement = useRef(null);

    // useEffect(() => {
    //     if(imgIndex === imagesForSlider.length) {
    //         setImgIndex(0)
    //     }
    //     divElement.current.style.backgroundImage = `url(${imagesForSlider[imgIndex]})`
        
    // }, [imgIndex])
    
    // setTimeout(() => setImgIndex(imgIndex + 1), 3000)

    function nextImage(){
        if(imgIndex === imagesForSlider.length - 1){
            setImgIndex(0)
        } else {
            setImgIndex(imgIndex + 1)
        }
    }

    function prevImage(){
        if(imgIndex === 0){
            setImgIndex(imagesForSlider.length - 1)
        } else {
            setImgIndex(imgIndex - 1)
        }
    }
    
    return (    
        <div className={styles.sliderDiv}>
            <Link href={`/buildings/${buildingSlugs[imgIndex]}`}>
                <img className={styles.sliderImg} width="100%" height="100%" src={imagesForSlider[imgIndex]}/>
            </Link>
            <div className={styles.textSection}>
                <div className={styles.sliderControls}>
                    <img src="/arrow-left.svg" width={26} height={20} onClick={() => prevImage()} />
                    <img className={styles.rightArrow} src="/arrow.svg" width={26} height={20} onClick={() => nextImage()} />
                </div>
                <Link href={`/buildings/${buildingSlugs[imgIndex]}`}>
                    <span>{buildings[imgIndex].building}</span>
                </Link>
            </div>
        </div>
        )
}


// <div 
// style={{
//     backgroundImage: `url(${imagesForSlider[imgIndex]})`
// }} className={styles.divStyle}
// ref={divElement}
// >
// </div>