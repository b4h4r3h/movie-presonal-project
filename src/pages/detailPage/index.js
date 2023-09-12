import { Fragment, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom/dist"
import api from "../../utils/api"
import { DetailPageStyle } from "./detailPageStyle";
import { useStoreActions, useStoreState } from "easy-peasy"
const DetailPage = () => {
    const genreId = useStoreState((state) => state.genreId)
    const setGenreId = useStoreActions((actions) => actions.setGenreId)
    const saveGenreId = useStoreActions((actions) => actions.saveGenreId)
    const [detailData, setDetailData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/api/v1/movies/${id}`)
                setDetailData(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [id]);

    const handleSearchGenre = async () => {
        const url = "/api/v1/genres"
        try{
            const response = await saveGenreId ({url})
            setGenreId(response.data);
        } catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        handleSearchGenre();
    },[])

    const findGenre = (name) => {
        const genre = genreId.find((item) => item.name === name);
        if(!genre) return null;
            return (
                <Link to={`/genre/${genre.id}`} className="genres-detail-page">
                    {name}
                </Link>
            );
    };
    
    const handleEdit = (plot, title) => {
        const updated = {
            // ...detailData,
            plot: plot,
            title: title
        }
        setDetailData(updated)
    }

    if (!detailData) return <p>Loading...</p>

    let description = detailData.plot || "";
    let slicedDescription = description.length < 120 ? description : description.slice(0, 150) + "...";
    const { title, poster, images, runtime, director,genres } = detailData;
    const secondImage = images ? images[0] : null;
    return (
        <DetailPageStyle>
            <div className="main-info">
                {secondImage ?
                    <Fragment>
                        <div className="poster-parent">
                            <img className="poster-img" src={secondImage} />
                        </div>
                        <div className="image-and-title-parent">
                            <img className="main-img" src={poster} />
                            <div>
                                <span className="movie-title-detail-page">{title}</span>
                                <span className="runtime" >{runtime}</span>
                                <p>{slicedDescription}</p>
                                <p>Genres: 
                                    {/* <Link to={`/genre/${id}`} className="genres-detail-page"> {genres[0]},</Link>
                                    <Link to={`/genre/${id}`} className="genres-detail-page"> {genres[1]},</Link>
                                    <Link to={`/genre/${id}`} className="genres-detail-page"> {genres[2]}</Link>
                                    {findGenreId()} */}
                                    {findGenre(genres[0])}
                                    {findGenre(genres[1])}
                                    {findGenre(genres[2])}
                                </p>
                                <p className="director-detail-page"> Director: {director}</p>
                            </div>
                        </div>
                    </Fragment>
                    : <div className="movie-home-container">
                        <div className="poster-parent-without-parent">
                            <img className="poster-img-without-cover" src={poster} />
                            <div>
                                <span className="movie-title-detail-page" >{title}</span>
                                <span className="runtime" >{runtime}</span>
                                <p>{slicedDescription}</p>
                                <p>Genres: 
                                    <Link to={''} className="genres-detail-page"> {genres[0]},</Link>
                                    <Link to={''} className="genres-detail-page"> {genres[1]},</Link>
                                    <Link to={''} className="genres-detail-page"> {genres[2]}</Link>
                                </p>
                                <p className="director-detail-page"> Director: {director}</p>
                            </div>
                        </div>
                    </div>
                    }
            </div>
        </DetailPageStyle>
    )
}
export default DetailPage;