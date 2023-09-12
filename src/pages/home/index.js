import { useEffect, useState } from "react"
import api from "../../utils/api"
import SearchBox from "../../utils/search"
import HomeList from "../../utils/list"
import { ListStyle } from "./style"
import { GenreItem } from "../../utils/list/style"
import { Link } from "react-router-dom"
import { useStoreActions, useStoreState } from "easy-peasy"
const Home = () => {
    const searchGenre = useStoreState((state) => state.searchGenre)
    const setSearchGenre = useStoreActions((actions) => actions.setSearchGenre)
    const saveSearchGenre = useStoreActions((actions) => actions.saveSearchGenre)
    const genreId = useStoreState((state) => state.genreId)
    const setGenreId = useStoreActions((actions) => actions.setGenreId)
    const saveGenreId = useStoreActions((actions) => actions.saveGenreId)

    const handleSearchGenre = async () => {
        const url = "/api/v1/genres"
        try {
            const response = await saveSearchGenre({ url })
            setSearchGenre(response.data);
            setGenreId(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleSearchGenre();
    }, [])

    const handleChange = (e) => {
        const searchText = e.target.value;
        const filteredData = searchGenre.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setGenreId(filteredData)
    };


    return (
        <ListStyle>
            <div className="margin-top-global">
                <div className="center-search-box">
                    <SearchBox data={searchGenre} something={setGenreId} placeholder="Search a Genre" onChange={handleChange} />
                </div>
                <p>Movie Genres</p>
                <div className="genre-parent container">
                    {genreId.length === 0 ? <p>No matches found</p> : <HomeList data={genreId} /> }
                </div>
            </div>
        </ListStyle>
    )
}
export default Home