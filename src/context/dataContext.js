import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    // const { id } = useParams();
    const [genre, setGenre] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await api.get(`/api/v1/genres/${id}/movies`)
    //             console.log(id)
    //             setGenre(response.data.data)
    //         } catch (error) {
    //             console.log(error)
    //         }   
    //     }
    //     fetchData();
    // }, [id]);
    return (
        <DataContext.Provider value={{
            genre,
            setGenre
        }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;

//! chizi ke ba dave fargh dare : export kenare DataProvider nazashtam