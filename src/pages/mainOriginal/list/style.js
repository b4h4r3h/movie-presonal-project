import styled from "styled-components";
import { cardBackground,borderColor,borderHover,white,black,darkprimary80, secondary80, background } from "../../../colors";
export const Style = styled.div`
.card-holder{
    display: inline-block;
    padding: 12px;
    background-color: ${cardBackground};
    border: 1px solid ${borderColor};
    border-radius:8px;
    min-height: 334px;
    position: relative;
}
.card-holder:hover{
    border-top: 1px solid ${borderHover};
    border-left: 1px solid ${borderHover};
}
a{
    text-decoration:none;
    color: ${white};
}
.title{
    margin-bottom: 0;
    max-width: 180px;
    color: ${white};
}
.react-multiple-carousel__arrow {
    background: ${white};
    opacity: 0.5
}
.react-multiple-carousel__arrow:hover{
    opacity:1;
    background: ${white};
}
.react-multiple-carousel__arrow::before {
    color:${black};
}
li{
    width:0;
}
.content-title{
    color: ${white};
    margin-top:32px;
}
.float-edit-delete-btn{
    position: absolute;
    top:16px;
    left: 16px;
    display:flex;
    gap:8px;
}
.delete-btn{
    border: 1px solid ${borderHover};
    background: ${background};
    cursor:pointer;
    border-radius:32px;
    padding: 8px;
}
.react-multi-carousel-item react-multi-carousel-item--active {
    background:blue !important;
}
.movie-list-edit-parent{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
}
`