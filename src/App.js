import React from "react";
import Header from './Components/Header/Header';
import Main from "./Components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App(){
  return(
    <>
    <Header/>
    <Main/>
    </>
  )
  }
