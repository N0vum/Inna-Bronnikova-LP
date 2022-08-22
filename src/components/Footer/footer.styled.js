import styled from 'styled-components';


export const StyledFooter = styled.div`
height:15rem;
text-align: center;
display: grid; 
grid-template-columns: repeat(3,1fr);
justify-items:center;
padding: 3rem;
position: relative;
font-size:1.2rem;
background-color: ${({ theme }) => theme.primaryLightGreen};
@media (min-width:1690px) {
  width:70%;
  margin: 0 auto;
  height:30vh;
  align-items:space-between;
  font-size:1.5rem;
  padding:3rem;
  grid-template-columns: 40% 40% 20%;
};

@media (max-width:768px){
  height:auto;
  grid-template-columns: 100%;
  grid-template-rows:1fr 1fr;
  grid-gap:1rem;
  padding-bottom:0.5rem;
  };
.contacts{
  margin-left:7rem;
  @media (max-width:768px){ 
    grid-column: 1;
  grid-row: 1;
    margin:0;}
}
.footer_icons{
padding: 0 1rem;  
}
.footer_icons img{
width:1.5rem;
height:1.5rem;
}
.footer_arrow-up{
font-size:3.5rem;
text-decoration:none;
color: ${({ theme }) => theme.primaryBlack};
transition: all 0.2s linear;
display:flex;
flex-flow: column;
@media (min-width:1690px) {
  font-size:4rem;
}
}
.footer_arrow-up:hover{
transform: translateY(-0.5rem);
transition: all 0.2s linear;}
.footer_arrow-up:after{
  content:'в начало';
  font-size:1.3rem;
  margin-top:-1rem;
}
.footer_copy{
position: absolute;
right:-2rem;
bottom:35%;
transform:rotate(-90deg);
@media (max-width:450px){
  transform:rotate(0deg);
  position: static;

}
}
`