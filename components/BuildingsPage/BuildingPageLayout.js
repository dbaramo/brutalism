import Link from "next/link";
import Image from "next/image";
import styles from "./BuildingPage.module.css";
import { gsap } from "gsap";

export default function BuildingPageLayout(props) {
  let { architect, building, city, country, description, images } = props.data;
  console.log(gsap);
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <div>
          <h1>{building}</h1>
          <span>Location: </span>
          <span>
            {city}, {country}
          </span>
        </div>
        <div>
          <span>Architect:</span>
          <span>{architect}</span>
        </div>
        <div className={styles.description}>
          <span>{description}</span>
        </div>
        <Link href={`/`}>
          <button>Home</button>
        </Link>
      </div>
      <div className={styles.rightDiv}>
        {images.map((url) => {
          return(
            <img src={url} key={url} />
          )
        })}
      </div>
    </div>
  );
}
