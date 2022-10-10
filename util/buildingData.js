import buildingJSON from "../data/data.json"

export function getAllPostSlugs() {
    return buildingJSON.map((data) => {
      return {
        params: {
          building: data.building.replaceAll(" ", "-")
        },
      };
    });
  }

export function getBuildingData(name){
    let nameWithSpace = name.replaceAll("-", " ")
    let result = buildingJSON.filter((val) => val.building === nameWithSpace)

    return result[0]
}