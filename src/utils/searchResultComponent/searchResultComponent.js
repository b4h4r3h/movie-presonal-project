import { Link } from "react-router-dom"
import { SearchResultComponentStyle } from "./searchResultStyle"
const SearchResultComponent = ({ data }) => {
    return (
        <SearchResultComponentStyle>
            {/* <div> */}
                {
                data.map((item) => {
                    const { title, id, year } = item
                    return (
                        <Link to={`/home/${id}/${title}`}>
                            <div key={id}>
                                <p>{title}</p>
                            </div>
                        </Link>
                    )
                })
            }
            {/* </div> */}
        </SearchResultComponentStyle>
    )
}
export default SearchResultComponent