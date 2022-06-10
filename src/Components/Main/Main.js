import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as S from './Mainstyles'
import { GlobalStyle } from './Mainstyles'

export default function Main() {

  const [movie, setMovie]=useState([])
  const [filtered, setFiltered]=useState([])
  const [moviePage, setMoviePage]=useState(false)

function searchingMovie(event){
  setFiltered(movie.filter((item)=>{
    if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
      return true
    }
  }))
}

function OpenModal(){
  setMoviePage(!moviePage)
}

function CloseModal(){
  setMoviePage(!moviePage)
}

axios.get(`https://ghibliapi.herokuapp.com/films`).then((response)=>{setMovie(response.data)})

  return (
    <>
    <GlobalStyle/>
    <input onChange={(event)=>{searchingMovie(event)}} />
    <h3>Nosso catalogo de animes</h3>
    <S.Catalog>
      {filtered.map(item=>(
         <S.Poster onClick={()=>{OpenModal()}} src={item.image} alt='poster do filme'/>
     ))}
    </S.Catalog>
    <S.Catalog>
      {movie.map(item=>(
         <S.Poster src={item.image} alt='poster do filme'/>
     ))}
    </S.Catalog>
    </>
  );
}