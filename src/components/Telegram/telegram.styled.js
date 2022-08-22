import styled from "styled-components";

export const StyledTelegram = styled.div`
  height: 20rem;
  width: 28rem;
  display: grid;
  grid-template-rows: 70% 30%;
  margin: 0.8rem;
  padding: 1rem;
  text-align: center;
  justify-items: center;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.primaryWhite};
  @media (max-width: 768px) {
    height: 18rem;
    width: 23rem;
  }
  .text_telegram-invite {
    font-size: 1.5rem;
    line-height: 2.2;
    @media (max-width: 768px) {
      width: 70%;
      font-size: 1.2rem;
      line-height: 1.8;
    }
    @media (max-width: 650px) {
    }
  }
  .btn_telegram {
    background-color: #00bfff;
    border-radius: 50%;
    height: 4.5rem;
    width: 4.5rem;
    border-color: none;
    border: 0;
    transform: scale(1);
    transition: all 0.2s linear;
  }
  .btn_telegram:hover {
    transform: scale(1.08);
    transition: all 0.2s linear;
  }
  .btn_telegram img {
    height: 1.6rem;
    width: 1.6rem;
    margin: 0 auto;
    color: ${({ theme }) => theme.primaryWhite};
    @media (max-width: 768px) {
      height: 1.4rem;
      width: 1.4rem;
    }
  }
`;
