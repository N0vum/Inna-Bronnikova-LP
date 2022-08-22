import styled from "styled-components";
export const StyledForm = styled.div`
  .form {
    height: 28rem;
    width: 28rem;
    max-width: 100vw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    align-content: center;
    border-radius: 18px;
    @media (max-width: 768px) {
      height: 25rem;
      justify-content: center;
    }
    @media (max-width: 576px) {
      margin: 1.5rem 0;
    }
  }
  .form_title {
    width: 28rem;
    letter-spacing: 2px;
    font-size: 1.5rem;
    align-self: center;
    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
    }
    @media (max-width: 320px) {
      width: 90%;
      line-height: 1.5;
    }
  }
  .form_item {
    display: flex;
    flex-direction: column;
    width: 60%;
    align-self: center;
    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }
  .form_item-input {
    padding: 0.4rem;
    font-size: 1.1rem;
  }
  .form_item-alert {
    font-size: 1rem;
    color: ${({ theme }) => theme.primaryRed};
    align-self: center;
    margin: 0 -5rem;
    @media (max-width: 400px) {
      width: 100%;
    }
  }
  .form_btn {
    align-self: center;
    width: 12rem;
    max-height: 2.6rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    border-radius: 7rem;
    transform: scale(1);
    transition: all 0.3s linear;
    margin-top: 2rem;
    @media (max-width: 1024px) {
      height: 2.2rem;
    }
  }
  .form_btn:hover {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
`;
