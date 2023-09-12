import { Fragment, useState } from "react"
import { PlusOutlined } from "@ant-design/icons";
import { primary } from "../../../colors";
import { AddMovieStyle } from "./style";
import ModalForm from "../../../utils/modalForm";
import ModalTotal from "../../../utils/modalTotal";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useContext } from "react";
import DataContext from "../../../context/dataContext";
const AddMovie = (
    {genre, setGenre}
 ) => {
const [titles,setTitle] = useState("");
const [isOpen, setIsOpen] = useState(false);
const handleAdd = (e) => {
    e.preventDefault();
    let newInfo =  {
        id:genre.length,
        title: titles,
    }
    const updatedGenre = [...genre, newInfo]
    setGenre(updatedGenre)
    setTitle("");
    setIsOpen(false);
}

const handleEdit = (id, title,poster) => {
    console.log(title.length);
    const titleSlicedEdit = title.length > 24 ? title.slice(0, 23) + "..." : title;
    const updateGenre = [...genre];
    const x = updateGenre.findIndex(item => item.id === id);
    console.log(x);
    updateGenre[x] = {
        ...updateGenre[x],
        title: titleSlicedEdit,
        poster: URL.createObjectURL(poster),
    };
    setGenre(updateGenre);
    setIsOpen(false);
};

const openModal = () => {
    setIsOpen(true);
}
const closeModal = () => {
    setIsOpen(false)
}
return (
    <AddMovieStyle>
        <div className="add-text-parent">
            {/* <div> */}
            <PlusOutlined className="add-text-btn" style={{fontSize: '24px', color: primary}} />
            {/* </div> */}
            <button onClick={openModal}>Add a Movie</button>
            {
                isOpen ? (
                    <ModalTotal head="Add a Movie Please" onClick={closeModal}>
                        <ModalForm genre={genre} setGenre={setGenre} setIsOpen={setIsOpen} onEdit={handleEdit}></ModalForm>
                    </ModalTotal>
                ) : null
            }
        </div>
    </AddMovieStyle>
)    
}
export default AddMovie;