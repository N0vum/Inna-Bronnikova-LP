import styled from 'styled-components';


export const StyledFinality = styled.div`
height:auto;
display: grid; 
grid-gap: 4rem;
grid-template-areas: 'card slogan';
grid-template-columns: 40% 60%;
align-content:center;
margin: 0 auto;
padding: 6rem 3rem;
background-color: ${({ theme }) => theme.primaryWhite2};
@media (min-width:1690px) {
  width:70%;
}
  @media (max-width: 830px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr 1fr;
    grid-template-areas:
    "card"
    "slogan";
    grid-gap: 1rem;
  margin: 0 auto;
  padding: 6rem 3rem;
  justify-content: center;
}
@media (max-width:475px) {
  grid-auto-rows: 30% 70%;
padding-bottom: 6rem;
}
.slogan{
  @media (max-width: 830px) {
  margin: 0 auto;
justify-items: center;
text-align:center;}
}
.finality_card{
grid-area: card;
margin:0 auto;

}
.finality_card > img{
max-width: 19rem;
max-height: 19rem;
border-radius:50%;
transform: scale(-1,1);
@media (max-width: 400px) {
  max-width: 17rem;
max-height: 17rem;
}}
.instruction{
  margin: -2rem 0 8rem 0;
  @media (max-width:400px) {
    margin: -2rem 0 5rem 0;
}
}

`