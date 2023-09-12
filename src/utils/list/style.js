import styled from "styled-components";
import { cardBackground,borderColor, borderHover,white } from "../../colors";
export const GenreItem = styled.div`
span{
    display:inline-block;
    width: 260px;
    text-align: center;
    padding: 16px 0;
    background-color: ${cardBackground};
    border: 1px solid ${borderColor};
    border-radius:8px;
    position: relative;
}
a{
    text-decoration:none;
    color: ${white};
}
span:hover{
    border-top: 1px solid ${borderHover};
    border-left: 1px solid ${borderHover};
}

`