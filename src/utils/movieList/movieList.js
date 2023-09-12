import { useState, useEffect } from "react";
import { Style } from "../../pages/mainOriginal/list/style";
import MovieItem from "../movieItem";
import AddMovie from "../../pages/genrePage1/addaMovie";
import { useContext } from "react";
import DataContext from "../../context/dataContext";
import "react-multi-carousel/lib/styles.css";
const MovieList = ({genre, setGenre}) => {
    useEffect(() => {
        setGenre(genre)
    }, [genre])
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

    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const openModal = (item) => {
        setIsOpen(true);
        setModalData(item);
    }
    const closeModal = () => {
        setIsOpen(false);
        setModalData(null);
    }
    const handleEdit = (id, title, poster) => {
        console.log(title.length);
        const titleSlicedEdit = title.length > 24 ? title.slice(0, 23) + "..." : title;
        const updateGenre = [...genre];
        const x = updateGenre.findIndex(item => item.id === id);
        console.log(x);
        if (poster) {
            updateGenre[x] = {
                ...updateGenre[x],
                title: titleSlicedEdit,
                poster: URL.createObjectURL(poster),
            };
        }
        else {
            updateGenre[x] = {
                ...updateGenre[x],
                title: titleSlicedEdit,
                // poster: URL.createObjectURL(poster),
            };
        }
        setIsOpen(false)
        setGenre(updateGenre);
    };

    const handleDelete = (id) => {
        const deleteItem = genre.filter(item => item.id !== id)
        setGenre(deleteItem)
    }
    return (
        <Style>
            {genre.length > 0 && (
                <div className="movie-list-edit-parent">
                    <AddMovie genre={genre} setGenre={setGenre} />
                    {
                        genre.map((item) => {
                            const { poster, title, id } = item;
                            let titleSliced = title.slice(0, 38);
                            return (
                                <MovieItem
                                    id={id}
                                    key={id}
                                    openModal={() => openModal(item)}
                                    handleDelete={() => handleDelete(id)}
                                    genre={genre}
                                    setGenre={setGenre}
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                    closeModal={closeModal}
                                    handleEdit={handleEdit}
                                    item={item}
                                    poster={poster}
                                    titleSliced={titleSliced}
                                    modalData={modalData}
                                />
                            );
                        })
                    }
                </div>
            )}
        </Style>
    )
}
export default MovieList