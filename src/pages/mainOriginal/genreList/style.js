import styled from "styled-components";
import { cardBackground,borderColor,borderHover,white,black,primary,secondaryFill, secondaryFillHover } from "../../../colors";
export const GenreHomeStyle = styled.div`
.genre-span{
    display:inline-block;
    width: 148px;
    text-align: center;
    padding: 16px 0;
    background-color: ${cardBackground};    
    border: 1px solid ${borderColor};
    border-radius:8px;
}
a{
    text-decoration:none;
    color: #fff;
}
.genre-span:hover{
    border-top: 1px solid ${borderHover};
    border-left: 1px solid ${borderHover};
}
.genre-parent{
    display:flex;
    gap: 16px;
}
p{
    color: ${white};
    margin-top:32px;
}
.more-btn{
color: ${primary};
display:inline-block;
width: 148px;
text-align: center;
padding: 16px 0;
background-color: ${secondaryFill};
border-radius:8px;
font-weight:600;
}
.more-btn:hover{
    background-color: ${secondaryFillHover};
}
`