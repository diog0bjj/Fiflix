import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  background-color:#5b88a5;
  color:#191013;
}`

export const Catalog = styled.div`
display:flex;
justify-content:flex-start;
flex-wrap:wrap;
padding-left:2rem;`

export const Poster = styled.img`
border-radius:5px;
border:solid black;
border-width:thin;
width:14rem;
height:12rem;
margin:0.5rem;`