import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import MovieComponent from "./Components/MovieComponent"
import MovieInfoComponent from "./Components/Movieinfo";

export const API_KEY = 'a0acea0a';
const Container = styled.div`
  display : flex;
  flex-direction: column;
`;
const Header = styled.div`
display : flex;
flex-direction : row;
justify-content : space-between;
background-color : black;
color : white ;
padding : 10px ;
align-items : center;
font-size : 25px;
box-shadow : 0 3px 6px 0 #555
`;
const AppName = styled.div`
display : flex ; 
flex-direction:row ;
align-items : center ;
`;
const MovieLogo = styled.img`
width : 60px;
height : 60px;
margin : 15px;
`;
const SearchBox = styled.div`
display : flex ;

padding : 10px 10px;
background-color:white;
border-radius : 6px;
margin-left:20px;
width: 50%;
height: 25px ;
background-color : white;
align-items : center;
`;
const SearchIcon = styled.img`
  width : 32px;
  height : 32px
  left: 0;
`;
const SearchInput = styled.input`
width : 100%;
color : black ;
font-size : 16px;
font-weight : bold ;
border : none ;
outline : none ;
margin-left : 15px;
`;
const MovieListContainer = styled.div`
display : flex; 
flex-direction : row ;
flex-wrap : wrap;
padding : 30px;
gap : 24px;
justify-content: space-evenly;

`;
function App() {

  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updatetimeoutId] = useState();
  const [movieList, updateMovieList] = useState();
  const [selectedMovie, onMovieSelect] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);

    updateMovieList(response.data.Search);
  }

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updatetimeoutId(timeout)
  }


  return (

    <Container>
      <Header>
        <AppName>
          <MovieLogo src="https://res.cloudinary.com/dpzrxnav1/image/upload/v1641903423/kisspng-film-portable-network-graphics-hoyts-cinematograph-5d2c8faf194cc7.2833107515632014551036_wkz2uu.png" />


          React Movie App
        </AppName>
        <SearchBox>
          <SearchIcon src="https://res.cloudinary.com/dpzrxnav1/image/upload/v1641903793/PngItem_6764358_rzaoho.png" />
          <SearchInput placeholder="Search Movie" value={searchQuery} onChange={onTextChange} />
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
      <MovieListContainer>
        {movieList?.length ?
          (movieList.map((movie, index) => <MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect} />)) : "No Movie"
        }
      </MovieListContainer>
    </Container>
  );
}

export default App;
