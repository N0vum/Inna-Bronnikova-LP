import styled from "styled-components";

export const StyledFeedBacks = styled.div`
  height: auto;
  margin: 0 auto;
  @media (min-width: 1440px) {
    width: 80%;
  }
  @media (min-width: 1690px) {
    width: 70%;
  }
  @media (min-height: 1024px) {
    height: 60vh;
  }
  background-color: ${({ theme }) => theme.primaryWhite};
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primaryLightGreen};
    padding: 1rem;
    padding-bottom: 4rem;
    @media (max-width: 1024px) {
    }
  }
  .alice-carousel__next-btn {
    margin: 0 auto;
  }
  .alice-carousel__stage {
    margin-top: 4rem;
    max-height: 23rem;
  }
  .feedback {
    height: auto;
    max-width: 18rem;
    @media (max-width: 1024px) {
      width: 16rem;
    }
    @media (max-width: 768px) {
      width: 18rem;
      padding: 0;
    }
    @media (max-width: 870px) {
      padding: 0 2rem;
    }
    @media (max-width: 500px) {
      padding: 4rem;
      min-width: 25rem;
    }
  }
  .feedback:first-child {
    margin-left: -1rem;
  }
  .topic {
    margin-left: auto;
    margin-right: auto;
  }
`;
