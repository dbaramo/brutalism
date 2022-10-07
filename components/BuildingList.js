import styles from "./BuildingList.module.css";
import buildings from "../data/data.json";
import Link from "next/link";
import { useState } from "react";

function BuildingRow({ building, city, year, architect, images, setImgUrl }) {
  let buildingNameWithoutSpace = building.replace(" ", "-");
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
        }}
        onMouseLeave={(e) => {
          setImgUrl("")
          setTextColor("")
          setTextOutline("")
        }}
      >
        <td style={{ color: textColor}}>{building}</td>
        <td style={{ color: textColor, "-webkit-text-stroke": textOutline}}>{architect}</td>
        <td style={{ color: textColor, "-webkit-text-stroke": textOutline}}>{city}</td>
        <td style={{ color: textColor, "-webkit-text-stroke": textOutline}}>{year}</td>
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