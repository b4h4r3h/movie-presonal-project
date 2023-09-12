import styled from "styled-components";
import { white, darkprimary80 } from "../../colors";
export const SearchBoxGlobal = styled.div`
.search-box{
    width: 350px;
    border:none;
    background-color: ${darkprimary80}; 
    padding:12px 0 12px 8px;
    color: ${white};
    outline:none;
    border-radius: 8px;
    position: relative;
}
.search-box:focus-visible{
    outline: 1px solid #594a66;
}
` 