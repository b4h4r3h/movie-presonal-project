import { Fragment, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { ModalStyle } from "./style";
import * as ReactDOM from 'react-dom';
// import { ReactDOM } from "react";
import IsOpen from "./openModal";
export const Modal = ({ opt, genre, id, onEdit }) => {
    const [modal, setModal] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(opt);
    const closeModal = () => {
        setModal(false);
    };
    const handleChangeValue = (e) => {
        setUpdatedTitle(e.target.value);
    }
    const handleSubmit = () => {
        onEdit(id,updatedTitle);
        setModal(false)
    }
    return (
        <ModalStyle >
            {modal ? (
                <IsOpen value={updatedTitle} onChange={handleChangeValue} close={closeModal} submit={handleSubmit} title="Edit the film"/>
            ) : null}
            <button className="edit-btn" onClick={() => setModal(true)}><EditOutlined style={{ fontSize: '16px', color: 'white' }}/></button>
            {/* {render()} */}
        </ModalStyle>
    )
}
export default Modal;