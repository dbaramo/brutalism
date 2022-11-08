import styles from "./BuildingList.module.css";
import buildings from "../data/data.json";
import Link from "next/link";
import { useState } from "react";

function BuildingRow({ building, city, year, architect, images, setImgUrl, setDisplayState }) {
  let buildingNameWithoutSpace = building.replaceAll(" ", "-");
  let [textColor, setTextColor] = useState("");
  let [textOutline, setTextOutline] = useState("");
  return (
    <Link href={`/buildings/${buildingNameWithoutSpace}`}>
      <tr
        className={styles.tableRow}
        onMouseOver={(e) => {
          setImgUrl(images[1])
          setTextColor("#ff7f11")
          setTextOutline("1px black")
          setDisplayState("block")
        }}
        onMouseLeave={(e) => {
          setImgUrl("")
          setTextColor("")
          setTextOutline("")
          setDisplayState("none")
        }}
      >
        <td className={styles.coulmnBuilding} style={{ color: textColor}}>{building}</td>
        <td className={styles.coulmnArchitect} style={{ color: textColor, "-webkit-text-stroke": textOutline}}>{architect}</td>
        <td className={styles.coulmnCity} style={{ color: textColor, "-webkit-text-stroke": textOutline}}>{city}</td>
        <td className={styles.coulmnYear} style={{ color: textColor, "-webkit-text-stroke": textOutline}}>{year}</td>
      </tr>
    </Link>
  );
}

export default function BuildingList() {
  const [imgUrl, setImgUrl] = useState("");
  const [displayState, setDisplayState] = useState("none");
  return (
    <div>
      <div className={styles.tableDiv}>
        <table className={styles.mainTable}>
          <thead>
            <tr className={styles.tableRow}>
              <th className={`${styles.coulmnHead} ${styles.coulmnBuilding}`}>Building</th>
              <th className={`${styles.coulmnHead} ${styles.coulmnArchitect}`}>Architect</th>
              <th className={`${styles.coulmnHead} ${styles.coulmnCity}`}>City</th>
              <th className={`${styles.coulmnHead} ${styles.coulmnYear}`}>Year</th>
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
                    setDisplayState={setDisplayState}
                  />
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <div style={{ 
        backgroundImage: `url(${imgUrl})`,
        display: displayState
      }} 
        className={styles.imageHover} 
      />
    </div>
  );
}