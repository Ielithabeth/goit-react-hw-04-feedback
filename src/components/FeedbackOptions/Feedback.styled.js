import styled from "styled-components";

export const Btn = styled.button`
width: 300px;
height: 50px;

color: #ffffff;
background-color: #161616;
border: 1px solid #8a8a8a;
border-radius: 25px;

font-weight: 900;
align-items: center;
text-transform: capitalize;

transition: background-color 0.3s ease;

&:hover,
&:focus {
    background-color: #ff007b;
    color: #161616;
    border: none;
}
`

export const Container = styled.div`
display: flex;
gap: 10px;

margin: 20px 0px 40px 0px;
`