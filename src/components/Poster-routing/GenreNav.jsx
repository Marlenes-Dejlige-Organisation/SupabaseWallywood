import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from '../Navigation/Navigation.module.scss';
import { useSupabase} from "../../Providers/SupabaseProvider"

export const GenreNav = ({ onDefaultGenreSelected }) => {

    const [apiData, setApiData] = useState([]);
    const { supabase } = useSupabase();

    const getData = async () => {

        if (supabase) {
            const { data, error } = await supabase
                .from ('genres')
                .select ('*')
                .order('title')
            if(error) {
                console.error("fejl i kald af genrer", error);
            } else{
                setApiData(data); // Ændret setGenreData til setApiData her
            }
        }
    }

    useEffect(() => {
        getData();
    }, [supabase]); // Fjernet setGenreData fra dependencies

 
    
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
