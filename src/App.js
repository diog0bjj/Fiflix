import React from "react";
import Header from './Components/Header/Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  background-color:#5b88a5;
  color:#191013;
}`

export default function App(){
  return(
    <>
    <GlobalStyle/>
    <Header/>
    </>
  )
  }
