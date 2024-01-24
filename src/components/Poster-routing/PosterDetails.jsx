import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export const PosterDetails = () => {
    const [apiData, setApiData] = useState({})
const {poster} = useParams()

const getData = async () => {
    const endpoint = `http://localhost:3000/posters/${poster}`
    const result = await axios.get (endpoint)
    console.log(result.data);
    setApiData(result.data);
}

useEffect(() =>{
    getData()
}, [poster])

    return (
    <>
   
 
<h2>{apiData.name}</h2>
<p>{apiData.description}</p>
<p>Pris:{apiData.price}</p>
<img src={apiData.image} alt={apiData.name} />


    
    </>
    )
}