import styled from "styled-components";
export const LoginStyle = styled.div`
input:invalid[focused="true"]{
    border:1px solid red;
}
input:invalid[focused="true"] ~ span{
    display:block;
    color:red;
}
`