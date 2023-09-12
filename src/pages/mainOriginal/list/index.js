import { Fragment } from "react"
import { Link } from "react-router-dom/dist";
import { Style } from "./style";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
// import   

const MainList = ({ data }) => {
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
        <Style>
            <p className="content-title">Trend Movies</p>
            <Carousel responsive={responsive}>
                    {
                        data.map((item) => {
                            const { poster, title, id } = item
                            return (
                                <Link className="card-holder" key={id} to={`/genre/${item.id}/${item.title}`}>
                                    <img className="card-img" src={poster} />
                                    <p className="title">{title}</p>
                                </Link>
                            )
                        })
                    }
            </Carousel>
        </Style>
    )
}
export default MainList