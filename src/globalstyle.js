import { createGlobalStyle } from "styled-components";
import { background, white, primary, primaryHover, cardBackground } from "./colors";
const GlobalStyle = createGlobalStyle`
.container{
    max-width: 1080px;
    margin: 0 auto;
}
.movie-home-container{
    max-width: 1324px;
    margin: 0 auto;
    margin-top:100px;
}
.card-parent{
    display:flex;
    gap:16px;
}
.card-img{
    width:180px;
    min-height: 270px;
    border-radius: 8px;
}
.margin-bottom{
    margin-bottom:48px;
}
.margin-top-global{
    margin-top:100px;
}
.close-btn{
    border:none;
    cursor:pointer;
    outline:none;
    background:${cardBackground};
    padding:8px;
    border-radius:6px;
}
.primary-btn{
    cursor:pointer;
    outline:none;
    border:none;
    padding:11px 32px;
    border-radius:8px;
    color: ${white};
    background: ${primary};
    font-size:14px;
    font-weight: 600;
    width: 100%;
    :hover{
        background: ${primaryHover}
    }
}
body{
    background-color:${background};
    margin:0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
export default GlobalStyle;