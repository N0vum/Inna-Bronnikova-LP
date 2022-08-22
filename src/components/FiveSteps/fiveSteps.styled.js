import styled from "styled-components";

export const StyledFiveSteps = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.primaryLightGreen};
  @media (min-width: 1690px) {
    width: 70%;
  }
  .steps {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 6rem 0 10rem 0;
    justify-content: center;
    width: 90%;
    @media (max-width: 1240px) {
      flex-direction: column;
      width: 20rem;
      padding: 6rem 0 7rem 0;
    }
    @media (max-width: 400px) {
      flex-direction: column;
      width: 85%;
      padding: 4rem 0;
    }
  }
  .step {
    display: flex;
    flex-direction: column;
    @media (max-width: 1240px) {
      flex-direction: row;
      justify-content: start;
      margin-bottom: 3rem;
    }
  }
  .step_digit {
    font-size: 10rem;
    font-family: "Concert";
    opacity: 0.8;
    padding-left: 0;
    color: ${({ theme }) => theme.primaryWhite};
    @media (max-width: 1240px) {
      font-size: 8rem;
    }
    @media (max-width: 768px) {
      font-size: 6rem;
    }
    @media (max-width: 400px) {
      font-size: 4rem;
    }
  }
  #id_1 {
    padding-right: 0.7rem;
  }
  .step_text {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 3px;
    line-height: 1.5;
    opacity: 0.7;
    color: ${({ theme }) => theme.primaryRed};
    @media (min-width: 2400px) {
      width: 80%;
      align-self: center;
    }
    @media (min-width: 1364px) {
      text-transform: uppercase;
    }
    @media (max-width: 1240px) {
      font-size: 1.5rem;
      align-self: center;
      padding-left: 3rem;
      margin: 0 auto;
    }
    @media (max-width: 400px) {
      padding-left: 1rem;
      font-size: 1.2rem;
    }
  }
`;
