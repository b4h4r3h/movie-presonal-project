import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import ModalTotal from "../modalTotal"
import ModalForm from "../modalForm"
import { Link } from "react-router-dom"
import { Style } from "../../pages/mainOriginal/list/style"
import { useStoreState, useStoreActions } from "easy-peasy"

const MovieItem = ({ id, openModal, handleDelete, closeModal, isOpen, item, handleEdit, titleSliced, poster, modalData, setIsOpen, genre
    , setGenre }) => {
        const setGenreId = useStoreActions((actions) => actions.setGenreId);
        const genreId = useStoreState((state) => state.genreId);
    return (
        <Style>
            <div className="card-holder" key={id}>
                <div>
                    <div className="float-edit-delete-btn">
                        <button onClick={openModal} className="delete-btn"><EditOutlined style={{ fontSize: '16px', color: 'red' }} /></button>
                        <button onClick={handleDelete} className="delete-btn"><DeleteOutlined style={{ fontSize: '16px', color: 'red' }} /></button>
                        {
                            isOpen && modalData && modalData.id === id ? (
                                <ModalTotal head="Edit a name of the movie" onClick={closeModal}>
                                    <ModalForm id={id} onEdit={handleEdit} setIsOpen={setIsOpen} genre={genre} setGenre={setGenre}
                                        item={item}>
                                    </ModalForm>
                                </ModalTotal>
                            ) : null
                        }
                    </div>
                    <Link to={`/genre/${item.id}/${item.title}`}>
                        <img className="card-img" src={poster} />
                        {item.title.length > 45 ? <p className="title" >{titleSliced} ...</p> : <p className="title">{item.title}</p>}
                    </Link>
                </div>
            </div>
        </Style>
    )
}
export default MovieItem