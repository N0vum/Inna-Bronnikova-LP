import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

   @font-face {
    font-family: "Concert";
    src: url(fonts/ConcertOne-Regular.ttf);
     }
       @font-face {
     font-family: "AlumniSans";
    src: url(fonts/AlumniSans-VariableFont_wght.ttf);
     }
     @font-face {
     font-family: "Forum-Regular";
    src: url(fonts/Forum-Regular.ttf);
     }
      #root{
        max-width: 100vw;
  overflow: hidden;
      }   
  html, body {
    margin: 0;
    padding: 0;
  font-size:16px;
}
    body {
    overflow-x: hidden;
    font-family: "Forum-Regular";  
    color: ${({ theme }) => theme.primaryBlack};
    background-color: ${({ theme }) => theme.primaryWhite};
    }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  .btn{
  padding:0.7rem 1.2rem;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  border-radius:10rem;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryLightGreen2};
  border: 2px solid ${({ theme }) => theme.primaryLightGreen2};
 cursor: pointer;
 transform: scale(1);
  transition: all 0.2s linear;
}
.btn:hover{
  transform: scale(1.1);
  transition: all 0.2s linear;
}
.btn-icon{
background:transparent;
border:none;
cursor: pointer;
 }
 .topic{
  font-size:1.5rem;
  text-align:center;
margin-top: 4rem;
  align-self: center;
  line-height:1.5;
  @media (max-width:576px) {
  width:80%;
      };
     @media (max-width:370px) { 
    width:80%;

     };}
.slogan{
height:auto;
width:80%;
grid-area: slogan;
display: grid;
grid-auto-rows: 40% 30% 20%;
grid-template-areas: 
'general'
'instruction'
'button';
justify-items:left;
align-content: space-around;
align-self:center;
@media (max-width:1280px) {
  width:87%;
};
@media (max-width:650px) {
  width:90%;
  margin-top:2rem;
  };
  @media (max-width: 578px) {
    height:auto;
    width:100%;
    justify-self:center;
    margin:0;
    text-align:center;
    justify-items:center;
padding:0 2rem;
    grid-auto-rows: 45% 45% 0%;
       }
  }
.general{
  grid-area: general;
  font-family: "Concert";
  font-size:1.2rem;
  letter-spacing: 0.6rem;
  line-height:1.5;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryRed};

@media (max-width:650px) {
  width:100%;
  font-size:0.8rem;
  letter-spacing: 0.3rem;
  line-height:1.6rem;
  };
  @media (max-width: 578px) {
  font-size:1.6rem;
  letter-spacing: 0.6rem;
  line-height:3.7rem;
padding-top:2rem;

   } }
  .instruction{
  grid-area: instruction;
     font-size:1.3rem;
     letter-spacing: 0.2rem;
    line-height:2;
  @media (max-width: 578px) {
    width:100%;
    letter-spacing: 0.2rem;
    line-height:3rem;
      }}
   
  `;
