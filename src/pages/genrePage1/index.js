import { Fragment, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom/dist"
import api from "../../utils/api"
import AddMovie from "./addaMovie"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import { useStoreActions, useStoreState } from "easy-peasy";
import GenreList from "./list"
const GenrePage = () => {
    const genre = useStoreState((state) => state.genre)
    const setGenre = useStoreActions((actions) => actions.setGenre)
    const saveGenre = useStoreActions((actions) => actions.saveGenre)
    const genreId = useStoreState((state) => state.genreId)
    const setGenreId = useStoreActions((actions) => actions.setGenreId)
    const saveGenreId = useStoreActions((actions) => actions.saveGenreId)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // const handleSaveGenre = async () => {
    //     const url = `/api/v1/genres/${id}/movies`;
    //     try{
    //         const response = await saveGenre ({url})
    //             setGenre(response.data.data); // Update the genre with the correct data
    //     } catch(error){
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     handleSaveGenre()
    // },[])
    //az nav migire aslisho
    return (
        <div className="movie-home-container">
            <GenreList genre={genre} setGenre={setGenre}/>
        </div>
    );
}
export default GenrePage;