import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PosterItem } from "./PosterItem"

export const PosterList = () => {
    const [apiData, setApiData] = useState([])
    const { genre } = useParams()

    const getData = async () => {
        const endpoint = `http://localhost:3000/posters/list_by_genre/${genre}`
        const result = await axios.get(endpoint)

        setApiData(result.data);
    }
    useEffect(() => {
        getData()
    }, [genre])
    return (
        <>
            {apiData && apiData.map(item => {
                return (
                    <PosterItem key={item.id} name={item.name} price={item.price} image={item.image} slug={item.slug}/>
                )
            })}

        </>
    )
}