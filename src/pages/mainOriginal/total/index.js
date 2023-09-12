import { Fragment, useEffect, useState } from "react";
import api from "../../../utils/api";
import MainList from "../list";
import MainList1 from "../list1";
import GenreListHome from "../genreList";
const Main = () => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const[genre,setGenre] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/api/v1/movies?page=5")
                setData(response.data.data);
            } catch (error) {
                console.log(error)
            }
            try {
                const response = await api.get("/api/v1/movies?page=4")
                setData1(response.data.data);

            } catch (error1) {
                console.log(error1)
            }
            try {
                const response3 = await api.get("/api/v1/genres")
                setGenre(response3.data);

            } catch (error2) {
                console.log(error2)
            }
        }
        fetchData();
    }, [])
    return (
        <div className="movie-home-container">
            <MainList data={data} />
            <MainList1 data={data1} />
            <GenreListHome data={genre} />
        </div>
    )
}
export default Main;
