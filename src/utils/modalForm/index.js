import { useState } from "react";
import { IsOpenStyle } from "../../pages/genrePage1/modal/openModalStyle";
import { PlusOutlined } from "@ant-design/icons";
import { primary } from "../../colors";
const ModalForm = ({ onEdit, genre, setGenre, id, item, setIsOpen }) => {
    const [inputValue, setInputValue] = useState(item?.title || ""); // Use title as initial value for edit, or an empty string for add
    const [file, setFile] = useState(null)
    const handleChangeValue = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = () => {
        if (inputValue) {
            // If inputValue is not empty, it's an edit or add operation
            if (item?.title) {
                // If item exists, it's an edit operation
                onEdit(id, inputValue, file);
            } else {
                // Otherwise, it's an add operation
                handleAdd();
            }
        }
        setIsOpen(false);
    };
    const handleFile = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

    const handleAdd = () => {
        if (inputValue && file) {
            let newInfo = {
                id: genre.length,
                title: inputValue,
                poster: URL.createObjectURL(file) // Store the data URL as the poster
            };
            const updatedGenre = [...genre, newInfo];
            setGenre(updatedGenre);
            setInputValue("");
            setIsOpen(false);
            console.log(updatedGenre);
        }
    };

    return (
        <IsOpenStyle>
            <form onSubmit={(e) => e.preventDefault()} className="edit-input-btn">
                <div className="input-file-parents">
                    <input
                        className="search-box"
                        value={inputValue}
                        onChange={handleChangeValue}
                    />
                    <label class="custom-file-upload">
                        <input
                            className="add-file "
                            type="file"
                            onChange={handleFile}
                        />
                        <PlusOutlined className="add-text-btn" style={{ fontSize: '24px', color: primary, marginTop: '12px' }} />
                        <p>Upload your file</p>
                    </label>
                </div>
                <button className="primary-btn" onClick={handleSubmit}>
                    {item ? "Edit" : "Add"}
                </button>
            </form>
        </IsOpenStyle>
    )
}
export default ModalForm