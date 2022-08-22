import styled from "styled-components";

export const StyledMenu = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  padding: 3rem 8em 1rem 2rem;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  background: transparent;
  transition: transform 0.3s ease-in-out;
  z-index: 3000;

  @media (min-width: 1690px) {
    right: 11%;
    top: 6%;
  }
  @media (max-width: 1280px) {
    margin-right: 1.5rem;
  }
  @media (max-width: 1024px) {
    padding: 0;
    margin: 0;
    top: 7rem;
    width: 100vw;
    justify-content: center;
    background-color: ${({ theme }) => theme.primaryWhite};
  }
  @media (max-width: 650px) {
    margin-top: -1rem;
  }
  @media (max-width: 576px) {
    position: ${({ open }) => (open ? "sticky" : "absolute")};
    top: 0;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    z-index: 3000;
    margin: 0 auto;
  }
  a {
    padding: 0.3rem 1rem;
    font-size: 1.5rem;
    font-family: "AlumniSans";
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    transition: color 0.3s linear;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.primaryBlack};
    @media (max-width: 1280px) {
      letter-spacing: 0.1rem;
      font-size: 1.3rem;
    }
    @media (max-width: 1024px) {
      padding: 0 auto;
      font-size: 1.1rem;
    }
    @media (max-width: 576px) {
      margin: 1.2rem;
      font-size: 1.5rem;
      letter-spacing: 4px;
    }
    &:hover {
      border: 1px solid black;
      transition: color 0.1s linear;
      @media (max-width: 576px) {
        color: ${({ theme }) => theme.primaryRed};
        border: none;
      }
    }
  }
`;
