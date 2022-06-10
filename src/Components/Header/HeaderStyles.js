import styled from 'styled-components'

export const Navegation = styled.div`
height:6rem;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
padding:1rem;`

export const SearchBar = styled.input`
width:15rem;
border:none;
background-color:white;
color:#191013;`

export const SearchAndAdd = styled.div`
width:30rem;
display:flex;
justify-content:space-evenly;
padding:2rem;`

export const AddMovie = styled.button`
height:2rem;
width:8rem;
background-color:#243a69;
color:white;
border-style:solid;
border-width:thin;
border-color:White;
border-radius:15px;
`

export const ModalAdd = styled.div`
border-radius: 5px;
border-width:thin;
border:solid #191013;
height:23rem;
width:30rem;
z-index:100;
position:fixed;
top:20%;
right:35%;
padding:1rem;`

export const TitleAndCloseModal = styled.div`
display:flex;
justify-content:space-between;
width:27.6rem;`

export const CLoseBtn = styled.button`
width:2rem;
height:1.5rem;
background-color:#243a69;
color:white;
border-style:solid;
border-width:thin;
border-color:White;`

export const InfosToAddAnime = styled.div`
display:flex;
height:15rem;
justify-content:space-between;
align-items:center;`

export const InputInfos = styled.input`
width:14rem;
height:2rem;
border-radius:5px;
background-color:#f4f4f2;
border:none;
margin:0.3rem 0 0.3rem 0;`

export const AddPosterPart = styled.div`
display:Flex;
width:13rem;
justify-content:center;
flex-direction:column;
margin-left:1rem;`

export const SendInfos = styled.div`
display:flex;
justify-content:center;
width:28rem;
padding-top:1rem;`

export const SubmitBtn = styled.button`
width:7rem;
height:1.5rem;
background-color:#243a69;
color:white;
border-style:solid;
border-width:thin;
border-color:White;`

export const PosterChoosed = styled.img`
height:10rem;
width:12rem;
border:solid black;`