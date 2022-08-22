import styled from "styled-components";

export const StyledTerms = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryLightGreen};
  margin: 0 auto;

  @media (min-width: 1690px) {
    width: 70%;

    margin: 0 auto;
  }
  @media (max-width: 800px) {
    padding-bottom: 4rem;
  }
  @media (max-width: 370px) {
    grid-template-columns: 1fr;
    padding: 0.5rem 0 4rem 0;
  }
  .terms {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 3rem;
    padding: 8rem 0;
    @media (max-width: 1024px) {
      grid-column-gap: 2rem;
      height: 90%;
      width: 90%;
    }
    @media (max-width: 650px) {
      width: 80%;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-row-gap: 2rem;
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
      grid-row-gap: 3rem;
      padding: 4rem 0;
    }
  }
  .term {
    height: 10rem;
    display: grid;
    grid-template-columns: 20% 80%;
    padding: 0 0.5rem 0 0;
    align-items: center;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.primaryWhite};
    box-shadow: 0px 2.5px 5px 0px rgba(0, 0, 0, 0.5);
    @media (max-width: 1024px) {
      height: 9rem;
    }
    @media (max-width: 800px) {
      height: auto;
    }
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
      grid-template-rows: 10% 90%;
    }
    @media (max-width: 576px) {
      display: flex;
      flex-direction: columns;
    }
    @media (max-width: 370px) {
    }
  }
  .term_check {
    font-size: 2.5rem;
    line-height: 1.6rem;
    color: #666;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 1.5rem;
    }
    @media (max-width: 650px) {
      font-size: 1.5rem;
      text-align: center;
      align-self: start;
    }
    @media (max-width: 576px) {
      min-width: 4rem;
      margin: 0;
      align-self: center;
    }
  }
  .term:hover > .term_check {
    color: ${({ theme }) => theme.primaryRed};
  }
  .term_text {
    font-size: 1.3rem;
    padding-right: 0.5rem;
    line-height: 1.6rem;
    text-align: center;
    @media (min-height: 1366px) {
      font-size: 1.6rem;
      line-height: 1.8rem;
    }
    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }
    @media (max-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
    @media (max-width: 650px) {
      font-size: 1.1rem;
      margin: 0.5rem 1rem 0 1rem;
    }
    @media (max-width: 576px) {
      margin: 2rem auto 2rem 0;
      font-size: 1.3rem;
      text-align: left;
    }
    @media (max-width: 370px) {
      margin: 0.8rem auto 0.8rem 0;
    }
  }
`;
