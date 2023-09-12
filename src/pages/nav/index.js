import { Link } from "react-router-dom/dist"
import { NavStyle } from "./style"
import AddMovie from "../genrePage1/addaMovie"
import ModalTotal from "../../utils/modalTotal"
import ModalForm from "../../utils/modalForm"
import SearchBox from "../../utils/search"
import SearchResultComponent from "../../utils/searchResultComponent/searchResultComponent"
import { useState, useEffect } from "react"
import useWindowSize from "../../utils/useWindowSize/useWindowSize"
import { useParams } from "react-router-dom/dist"
import api from "../../utils/api"
import { useStoreActions, useStoreState } from "easy-peasy"
import { useContext } from "react"
import DataContext from "../../context/dataContext"
import { CloseOutlined, EditFilled, HeartFilled } from "@ant-design/icons"
import { useAuth0 } from "@auth0/auth0-react"
const Nav = () => {
    // const { width } = useWindowSize();
    // const {genre, setGenre} = useContext(DataContext)
    const genre = useStoreState((state) => state.genre)
    const setGenre = useStoreActions((actions) => actions.setGenre)
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [changeSearchGlobal, setChangeSearchGlobal] = useState("");
    const [showAutoComplete, setShowAutoComplete] = useState(false);
    const [resultSearch, setResultSearch] = useState([]);
    const { user, isAuthenticated } = useAuth0();

    const saveGenre = useStoreActions((actions) => actions.saveGenre)
    const setUserInfo = useStoreActions((actions) => actions.setUserInfo);

    const handleSaveGenre = async () => {
        const url = `/api/v1/genres/${id}/movies`;
        try {
            const response = await saveGenre({ url })
            setGenre(response.data.data); // Update the genre with the correct data
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleSaveGenre()
    }, [id])

    const onChangeGlobalSearch = async (e) => {
        try {
            setChangeSearchGlobal(e.target.value)

            if ((e.target.value || "").trim() !== '') {
                setShowAutoComplete(true)
            } else {
                setShowAutoComplete(false)
            }
            const response = await api.get("/api/v1/movies", {
                params: {
                    search: e.target.value
                }
            })
            const filteredMovies = response.data.data.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setResultSearch(filteredMovies)
        } catch (err) {
            console.log(err)
        }
    }
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <NavStyle>
            <div className="bg-nav">
                <nav>
                    {/* {
                    width < 800 ? <CloseOutlined /> :
                        width < 1000 ? <HeartFilled/> :
                            <EditFilled/>
                } */}
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/genre">Genre</Link>
                        {isAuthenticated ?
                            <Link to= "/login">{user.name}</Link>
                            : <Link to="/login">Login</Link>}
                        <Link to="/register">Register</Link>
                        <Link to="/test-login">Test</Link>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <SearchBox placeholder="Seach a Movie" onChange={onChangeGlobalSearch} onFocus={() => {
                            if (changeSearchGlobal.length > 0 && resultSearch.length > 0) {
                                setShowAutoComplete(true);
                            }
                        }} />
                        {showAutoComplete && (
                            <div onClick={() => setShowAutoComplete(false)}>
                                <SearchResultComponent data={resultSearch} />
                            </div>
                        )}
                    </div>
                    <div>
                        <button onClick={openModal} className="primary-btn">Add A Movie</button>
                        {
                            isOpen ? (
                                <ModalTotal head="Add a movie" onClick={closeModal} genre={genre} setGenre={setGenre}>
                                    <ModalForm genre={genre} setGenre={setGenre} setIsOpen={setIsOpen} />
                                </ModalTotal>
                            ) : null
                        }
                    </div>
                </nav>
            </div>
        </NavStyle>
    )
}
export default Nav