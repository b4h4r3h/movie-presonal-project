import styled from "styled-components";
import { background, borderHover, white, darkOrange80, secondary80, secondaryFill, cardBackground, darkprimary80 } from "../../../colors";
export const IsOpenStyle = styled.div`
.modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1002;
    background: ${background};
    padding:24px;
    border-radius:8px;
  }
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: rgba(0, 0, 0, 0.86);
    background-color: rgb(0 0 0 / 50%);
    backdrop-filter: blur(10px);
    z-index: 1001;
  }
.modal-title{
    color: ${white};
    margin-top:0;
}
.modal-head{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 24px;
}
input[type="file"]{
  display: none;
}
.custom-file-upload{
  // border: 1px solid ${borderHover};
  background: ${darkprimary80} ;
  text-align: center;
  padding: 8px 0;
  cursor: pointer;
  color: ${white};
  width: 100%;
  border-radius: 8px;
}
.add-text-btn{
  padding: 8px;
  background: ${darkOrange80};
  border-radius: 20px;
}
.input-file-parents{
  display: flex;
  flex-direction: column;
  gap:16px;
  margin-bottom: 32px;
}
`