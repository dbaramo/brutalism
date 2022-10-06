import { useRouter } from 'next/router'
import Link from "next/link";
import { getAllPostSlugs, getBuildingData } from '../../util/buildingData'

export function getStaticProps({ params }){
    let building = params.building
    let result = getBuildingData(building)
    return {
        props: {
            data: result
        }
    }
}
export function getStaticPaths() {
    const paths = getAllPostSlugs();
    return {
      paths,
      fallback: false,
    };
}


export default function BuildingPage({ data }){
    let { architect, building, city } = data
    return (
        <div>
            <h1>{building}</h1>
            <p>{city}</p>
            <p>{architect}</p>
            <Link href={`/`}>
                <button>Home</button>
            </Link>
        </div>
    )
}