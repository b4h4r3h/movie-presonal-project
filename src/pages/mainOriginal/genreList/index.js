import { Link } from "react-router-dom/dist";
import { GenreItem } from "../../../utils/list/style";
import { GenreHomeStyle } from "./style";
export const GenreListHome = ({ data }) => {
    const render = () => {
        const slicedData = data.slice(0, 7);
        return slicedData.map((item) => {
            const { name, id } = item
            return (
                <GenreHomeStyle>
                    <Link to={`/genre/${id}`} key={id}>
                        <span className="genre-span">{name}</span>
                    </Link>
                </GenreHomeStyle>
            )
        })
    }
    return (
        <GenreHomeStyle className="margin-bottom">
            <p>Movie Genres</p>
            <div className="genre-parent">
                {render()}
                <Link className="link-white" to="/genre">
                <span className="more-btn">More</span>
                </Link>
            </div>
        </GenreHomeStyle>
    )
}
export default GenreListHome;