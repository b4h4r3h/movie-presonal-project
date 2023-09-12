import { Link } from "react-router-dom/dist";
import { GenreItem } from "./style";
import { useStoreActions, useStoreState } from "easy-peasy";
export const HomeList = ({data}) => {

    const render = () => {
        return data.map((item) => {
            const { name, id } = item
            return (
                <GenreItem key={id}>
                    <Link to={`/genre/${id}`} key={id}
                    >
                        <span>{name}</span>
                    </Link>
                </GenreItem>
            )
        })
    }
    return (
        <>
            {render()}
        </>
    )
}
export default HomeList