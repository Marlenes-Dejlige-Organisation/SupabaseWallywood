import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from '../Navigation/Navigation.module.scss';

export const GenreNav = ({ onDefaultGenreSelected }) => {
    const [apiData, setApiData] = useState([]);
    
    const getData = async () => {
        const endpoint = `http://localhost:3000/genre`;
        const result = await axios.get(endpoint);
        setApiData(result.data);
        
        // Hvis der er data og en callback er tilgængelig, vælg den første genre som standard
        if (result.data.length > 0 && onDefaultGenreSelected) {
            onDefaultGenreSelected(result.data[0].slug);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <ul>
                <h3>Genre</h3>
                {apiData && apiData.map(item => (
                    <li key={item.id}>
                        <NavLink to={item.slug} className={({ isActive }) => isActive ? styles.activeNavLink : styles.NavLink}>{item.title}</NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};
