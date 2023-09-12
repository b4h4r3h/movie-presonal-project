import styled from "styled-components";
import { LightPrimary50, background, borderColor, borderHover, darkprimary80, primary, white } from "../../colors";
export const DetailPageStyle = styled.div`
.poster-img{
    position: relative;
    width: 100%;
    max-height: 320px;
    object-fit: cover;
    display:block;
    // filter: blur(6px);
}
.main-img{
    width: 200px;
    height: auto;
    left: 32px;
    bottom:0;
    border-radius:8px;
    border: 1px solid ${borderHover};
}
.main-info{
    position: relative;
    margin-top: 120px;
    margin-top: 66px;
}
.poster-parent{
    // border-bottom: 1px solid ${borderHover};
}
.poster-parent::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    border-bottom: 1px solid ${borderHover};
    z-index: 1;
}
p, span{
    color: ${white};
}
.image-and-title-parent{
    display:flex;
    position: absolute;
    align-items: center;
    z-index: 2;
    gap:16px;
    top:20%;
    left:32px;
}
.poster-img-without-cover{
    width: 200px;
    height: auto;
    border-radius:8px;
    border: 1px solid ${borderHover};
}
.poster-parent-without-parent{
    display:flex;
    align-items: center;
    gap:16px;
}
.movie-title-detail-page{
    font-size: 32px;
    font-weight: 700;
}
.runtime{
    padding:4px 12px;
    background: ${borderHover};
    border-radius: 20px;
    margin-left: 12px;
}
.director-detail-page {
    font-size: 14px;
}
.genres-detail-page {
    text-decoration: none;
    color: ${white};
    :hover{
        color: ${primary}
    }
}
`