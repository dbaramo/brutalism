import { useRouter } from "next/router";
import { getAllPostSlugs, getBuildingData } from "../../util/buildingData";
import BuildingPageLayout from "../../components/BuildingsPage/BuildingPageLayout";

export function getStaticProps({ params }) {
  let building = params.building;
  let result = getBuildingData(building);
  return {
    props: {
      data: result,
    },
  };
}
export function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export default function BuildingPage({ data }) {
  return (
    <BuildingPageLayout 
      data={data}
    />
  );
}
