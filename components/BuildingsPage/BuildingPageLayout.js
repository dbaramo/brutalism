import Link from "next/link";
import styles from "./BuildingPage.module.css";

export default function BuildingPageLayout(props) {
  let { architect, building, city, country, description } = props;
  return (
    <div className={styles.container}>
      <h1>{building}</h1>
      <p>Location:</p>
      <p>{city}, {country}</p>
      <p>Architect:</p>
      <p>{architect}</p>
      <p>{description}</p>
      <Link href={`/`}>
        <button>Home</button>
      </Link>
    </div>
  );
}
