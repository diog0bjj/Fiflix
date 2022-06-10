import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Adds  from '../../Pages/Adds'
import Main from "../Main/Main"
import * as S from './HeaderStyles'


export default function Header(){

const [modal, setModal]=useState(false)
const [image, setImg]=useState()
const [inputTitle, setInputTitle]=useState()
const [inputDescription, setInputDescription]=useState()
const [inputImage, setInputImage]=useState()
const [addedMovie, setAddedMovie]=useState([])


function OpenModal(){
    setModal(!modal)
}

function CloseModal(){
    setModal(!modal)
}

const Addbox = () =>{
    return(
        <>
        <S.ModalAdd>
            <S.TitleAndCloseModal>
                <h2>Adicionar animes</h2>
                <S.CLoseBtn onClick={()=>{CloseModal()}}>x</S.CLoseBtn>
            </S.TitleAndCloseModal>
            <form>
                <S.InfosToAddAnime>
                    <div>
                        <h2>Title</h2>
                        <S.InputInfos onChange={(event)=>{setInputTitle(event.target.value)}}></S.InputInfos>
                        <h2>Description</h2>
                        <S.InputInfos></S.InputInfos>
                        <h2 onChange={(event)=>{setInputDescription(event.target.value)}} >rating</h2>
                    </div>
                    <S.AddPosterPart>
                        <S.PosterChoosed src={image}/>
                        <input onChange={(event)=>{setImg(event.target.files)}} type="file" accept="image/*"></input>
                    </S.AddPosterPart>
                </S.InfosToAddAnime>
                <S.SendInfos>
                    <S.SubmitBtn onClick={()=>{AddALLMovies()}} type='submit'>Confirm</S.SubmitBtn>
                </S.SendInfos>
            </form>
        </S.ModalAdd>
        </>
    )
}

const AddALLMovies =()=>{
    const EachAddedMovie = {
        title:inputTitle,
        descripition:inputDescription,
        poster:inputImage, 
    }
setAddedMovie(...addedMovie, EachAddedMovie)
}

    return(
        <>
        <Router>
        <S.Navegation>
            <h1>FiFlix</h1>
            <ul>
        {addedMovie.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
            <S.SearchAndAdd>
                <S.AddMovie onClick={()=>{OpenModal()}}>Adicionar anime</S.AddMovie>
                <S.SearchBar placeholder='Search here...'></S.SearchBar>
            </S.SearchAndAdd>
            {modal && Addbox()}
        </S.Navegation>
        <Routes>
          <Route path="/Main" element={<Main/>} />
          <Route path="../Pages/Adds" element={<Adds/>} />
        </Routes>
    </Router>
        </>
    )
}