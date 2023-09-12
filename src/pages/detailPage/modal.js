import { Fragment, useState } from "react"
export const Modal = ({ id, data, onEdit, dataTitle }) => {
    const [modal, setModal] = useState(false);
    const [updatedDescription, setUpdatedDescription] = useState(data)
    const [updatedTitle, setUpdatedTitle] = useState(dataTitle)
    const closeModal = () => {
        setModal(false);
    };
    const handleChangeValue = (e) => {
        setUpdatedDescription(e.target.value);
    }
    const handleChangeTitle = (e) => {
        setUpdatedTitle(e.target.value);
    }
    const handleSubmit = () => {
        onEdit(updatedDescription, updatedTitle)
    }
    return (
        <Fragment>
            <button onClick={() => setModal(true)}>open</button>
            {/* {render()} */}
            {modal ? (
                <div>
                    <p>this is modal for changing the description</p>
                    <input
                        value={updatedDescription}
                        onChange={handleChangeValue}
                    ></input>
                    <input
                        value={updatedTitle}
                        onChange={handleChangeTitle}
                    ></input>
                    <button onClick={closeModal}>close</button>
                    <button onClick={handleSubmit}>edit</button>
                </div>
            ) : null}
        </Fragment>
    )
}
export default Modal;