import { Fragment, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom/dist"
import { Style } from "../../mainOriginal/list/style"
import 'react-multi-carousel/lib/styles.css';
import { useContext } from "react";
import DataContext from "../../../context/dataContext";
import MovieList from "../../../utils/movieList/movieList";
import AddMovie from "../addaMovie";
const GenreList = ({genre, setGenre}) => {
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

    return (
        <MovieList genre={genre} setGenre={setGenre}/>
    );
}
export default GenreList;