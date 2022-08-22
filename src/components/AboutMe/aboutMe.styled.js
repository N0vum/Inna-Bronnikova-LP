import styled from "styled-components";

export const StyledAboutMe = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 60% 40%;
  background-color: ${({ theme }) => theme.primaryWhite2};
  justify-items: start;
  align-items: center;
  @media (min-width: 1690px) {
    width: 70%;
    margin: 0 auto;
  }

  @media (max-width: 1023px) {
    height: auto;
    grid-template-columns: 100%;
    grid-template-rows: 25% 75%;
    padding-bottom: 4rem;
  }
  .about_text {
    width: 90%;
    padding: 2rem 0;
    @media (max-width: 1023px) {
      margin-top: 7rem;
      margin-bottom: 9rem;
    }
    @media (max-width: 730px) {
      width: 100%;
    }
    @media (max-width: 470px) {
      margin-top: 10rem;
    }
  }
  ul {
    margin-left: 1rem;
    font-size: 1.5rem;
    line-height: 2;
    color: ${({ theme }) => theme.primaryLightGreen2};
    @media (max-width: 1024px) {
      font-size: 1.6rem;
      line-height: 2;
      margin-left: 0;
    }
    @media (max-width: 730px) {
      width: 90%;
    }
    @media (max-width: 670px) {
      width: 100%;
      margin: 5rem auto;
      padding: 0 2rem;
    }
    @media (max-width: 420px) {
      padding: 0 1rem;
    }
  }

  div ul:last-child {
    color: ${({ theme }) => theme.primaryBlack};
    text-align: center;
  }
  li {
    font-size: 1.2rem;
    font-weight: 500;
    list-style: none;
    line-height: 1.8;
    color: ${({ theme }) => theme.primaryBlack};

    @media (max-width: 1024px) {
      font-size: 1.4rem;
    }
  }
  .paragraph {
    display: flex;
    flex-flow: row nowrap;
  }
  .circle {
    color: ${({ theme }) => theme.primaryRed};
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
  }
  ul li:first-child {
    padding-top: 0.8rem;
    @media (max-width: 768px) {
      padding-top: 0.5rem;
    }
  }
  .about_photo {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 44% 50%;
    @media (min-height: 1366px) {
      height: 50vh;
    }
    @media (max-width: 1023px) {
      width: 70%;
      grid-column: 1;
      grid-row: 1;
      background-position: 34% 55%;
      justify-self: center;
    }
    @media (max-width: 576px) {
      width: 100%;
      grid-column: 1;
      grid-row: 1;
      background-size: cover;
      background-position: 34% 15%;
    }
  }
`;
