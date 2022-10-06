import styles from "./BuildingList.module.css";
import buildings from "../data/data.json";
import Link from "next/link";
import { useState } from "react";

function BuildingRow({ building, city, year, architect, images, setImgUrl }) {
  let buildingNameWithoutSpace = building.replace(" ", "-");
  return (
    <Link href={`/buildings/${buildingNameWithoutSpace}`}>
      <tr
        className={styles.tableRow}
        onMouseOver={(e) => setImgUrl(images[1])}
        onMouseLeave={(e) => setImgUrl("")}
      >
        <td>{building}</td>
        <td>{architect}</td>
        <td>{city}</td>
        <td>{year}</td>
      </tr>
    </Link>
  );
}

export default function BuildingList() {
  const [imgUrl, setImgUrl] = useState("");
  return (
    <div>
      <div className={styles.tableDiv}>
        <table className={styles.mainTable}>
          <thead>
            <tr className={styles.tableRow}>
              <th className={styles.coulmnHead}>Building</th>
              <th className={styles.coulmnHead}>Architect</th>
              <th className={styles.coulmnHead}>City</th>
              <th className={styles.coulmnHead}>Year</th>
            </tr>
          </thead>
          <tbody>
            {buildings.map(
              ({ id, architect, city, building, year, images }) => {
                return (
                  <BuildingRow
                    architect={architect}
                    city={city}
                    building={building}
                    year={year}
                    images={images}
                    key={id}
                    setImgUrl={setImgUrl}
                  />
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <div style={{ 
        backgroundImage: `url(${imgUrl})` }} 
        className={styles.imageHover} 
      />
    </div>
  );
}