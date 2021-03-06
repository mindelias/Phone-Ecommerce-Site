import styled from "styled-components"

 export const ButtonCont = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border: 0.05rem solid var(--lightBlue);
color:var(--lightBlue);
border-radius:0.5rem;
padding:0.2rem 0.6rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainBlue);

}
&:focus{
    outline:none;
}

`;

export default ButtonCont;