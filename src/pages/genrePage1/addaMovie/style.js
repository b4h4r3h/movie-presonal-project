import styled from "styled-components";
import { darkOrange80, primary, white } from "../../../colors";
export const AddMovieStyle = styled.div`
.add-text-btn{
    padding: 8px;
    background: ${darkOrange80};
    border-radius: 20px;
}
.add-text-parent{
    display:flex;
    gap: 16px;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height: 360px;
    border: 1px solid ${darkOrange80};
    border-radius: 8px;
    width:205px;
}
button{
    padding: 10px 40px;
    background: ${primary};
    border:none;
    border-radius: 8px;
    color: ${white};
    font-weight:600;
    cursor:pointer;
}
`