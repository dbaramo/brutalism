import styles from "./ImageSlider.module.css";
import buildings from "../data/data.json";
import { useState, useEffect, useRef } from "react";

const imagesForSlider = buildings.map((b) => b.images[0])

export default function ImageSlider(){
    const [imgIndex, setImgIndex] = useState(0);
    const divElement = useRef(null);
    
    useEffect(() => {
        if(imgIndex >= 12) setImgIndex(0)
        divElement.current.style.backgroundImage = `url(${imagesForSlider[imgIndex]})`
    }, [imgIndex])
    setTimeout(() => setImgIndex(imgIndex + 1), 3000)

    return (
        <div 
        style={{
            backgroundImage: `url(${imagesForSlider[imgIndex]})`
        }} className={styles.divStyle}
        ref={divElement}
        >
        </div>
        )
}