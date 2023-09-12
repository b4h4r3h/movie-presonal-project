import styled from "styled-components";
import { white,cardBackground,borderColor, primary, primaryHover } from "../../colors";
export const NavStyle = styled.div`
.bg-nav{
    background-color: rgb(26 17 35 / 70%);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1001;
    border-bottom: 1px solid ${borderColor};
}
nav{
padding: 12px 24px;
display: flex;
justify-content: space-between;
align-items: center;

a{
    text-decoration:none;
    color:${white};
    margin-right:24px;
}
}
`