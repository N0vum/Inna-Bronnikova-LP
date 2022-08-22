import styled from 'styled-components';


export const StyledBurger = styled.button`

  position:   absolute;
  top: 3rem;
  right: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 6rem;
  height: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 4001;
  @media (min-width: 1690px) {
    right: 17%;
  }
  @media (max-width:1024px) {
top:2rem;};
  &:focus {
    outline: none;
  };
  @media (max-width:650px) {
 top:1rem;
 right:1rem;
  } 
  @media (max-width:576px) {
   top:  ${({ open }) => open ? '3rem' : '15px'};
right: ${({ open }) => open ? '2rem' : '15px'};
  } 
 .sticks{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.7rem;
  height: 1rem;
 }
  .stick {
    display: flex;
     height: 0.15rem;
    background-color: ${({ theme, open }) => open ? theme.primaryLightGreen2 : theme.primaryBlack};  
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 4px;
     :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
      }
      .menu_letters{
    font-size: 1rem;
    opacity: ${({ open }) => open ? 0 : 1};
    padding-right:${({ open }) => !open ? "1rem" : ''};
    @media (max-width:768px) {
    opacity:0;
}
@media (min-width: 1690px) {
  font-size: 1.2rem;
  }
  }


`;