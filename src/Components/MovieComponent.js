import styled from "styled-components";
const MovieContainer = styled.div`
display : flex ;
flex-direction : column;
padding : 10px;
width : 280px;
box-shadow : 0 3px 10px 0 #aaa;
cursor : pointer
`
const CoverImage = styled.img`
object-dit: cover;
heght:362px
`;
const MovieName = styled.span`
    font-size:18px;
    font-weight: 600;
    color : black ;
    margin:15px 0;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
`;
const InfoColumn = styled.div`
display : flex;
flex-direction : row;
justify-content:space-between;
`
const Movieinfo = styled.span`
    font-size:14px;
    font-weight: 600;
    color : black ;
    text-transform : capitalize
`;
const MovieComponent = (props) => {
    return (
        <MovieContainer>
            <CoverImage src="https://www.amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" />
            <MovieName>Guardians of the Galaxy Vol. 2</MovieName>
            <InfoColumn>
                <Movieinfo>Year : 2012</Movieinfo>
                <Movieinfo>Type : Movie</Movieinfo>

            </InfoColumn>
        </MovieContainer>
    )
}
export default MovieComponent;