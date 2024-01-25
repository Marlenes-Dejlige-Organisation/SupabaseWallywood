import axios from "axios"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

export const GenreNav = () => {
    const [apiData, setApiData] = useState([])
    const getData = async () => {
        const endpoint = `http://localhost:3000/genre`
        const result = await axios.get(endpoint)
        setApiData(result.data);
    }
    useEffect(() => {
        getData()
    }, [setApiData])

    return (
        <>

            <ul>
                <h3>Genre</h3>
                {apiData && apiData.map(item => {
                    return (
                        <li key={item.id}>
                            <NavLink to={item.slug}>{item.title}</NavLink>
                        </li>
                    )
                })}
                <li><NavLink to="/plakater/drama">Drama</NavLink></li>
            </ul>
        </>

    )
}