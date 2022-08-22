import styled from "styled-components";

export const StyledFeatures = styled.div`
  width: 100%;
  align-items: center;
  justify-items: center;
  text-align: center;
  align-self: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primaryWhite};
  @media (min-width: 1690px) {
    width: 70%;
    margin: 0 auto;
  }
  @media (max-width: 400px) {
    padding-bottom: 4rem;
  }
  .clients {
    padding-top: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 5rem;
    justify-items: center;
    @media (min-width: 1690px) {
      grid-gap: 7rem;
    }
    @media (max-width: 1024px) {
      grid-gap: 3rem;
    }
    @media (max-width: 768px) {
      width: 80%;
    }
    @media (max-width: 576px) {
      width: 90%;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      padding-top: 5rem;
      grid-gap: 4rem;
      margin-bottom: -4rem;
    }
    @media (max-width: 400px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
      margin-bottom: 2rem;
    }
  }
  .client > img {
    width: 13rem;
    border-radius: 50%;
    @media (max-width: 1440px) {
      width: 10rem;
    }
    @media (max-width: 768px) {
      width: 8rem;
    }
    @media (max-width: 576px) {
      width: 10rem;
    }
  }
  .client > p {
    position: absolute;
    top: 65%;
    left: 50%;
    width: 15rem;
    z-index: 100;
    padding: 3px;
    font-size: 1rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    transform: translate(-50%, -35%);
    color: ${({ theme }) => theme.primaryBlack};
    background-color: ${({ theme }) => theme.primaryWhite};
    @media (max-width: 1440px) {
      width: 10rem;
      font-size: 0.8rem;
    }
    @media (max-width: 768px) {
      width: 8rem;
    }
    @media (max-width: 576px) {
      width: 10rem;
    }
  }
  .client_expert,
  .client_mentor,
  .client_freelancer,
  .client_manager,
  .client_businessWoman,
  .client_sales {
    width: 13rem;
    position: relative;
    display: flex;
    margin: auto;
    border-radius: 50%;
    @media (max-width: 1440px) {
      width: 10rem;
    }
    @media (max-width: 768px) {
      width: 8rem;
    }
    @media (max-width: 576px) {
      width: 10rem;
    }
  }
  .client_expert:before,
  .client_mentor:before,
  .client_freelancer:before,
  .client_manager:before,
  .client_businessWoman:before,
  .client_sales:before {
    content: "";
    text-align: center;
    position: absolute;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    opacity: 0.3;
    display: flex;
    border-radius: 50%;
    transform: scale(1);
    transition: all 0.3s linear;
    background: #66cccc;
  }
  .client_manager > img,
  .client_sales > img {
    transform: scale(-1, 1);
  }

  .client_mentor:before {
    background: #ff6699;
  }

  .client_manager:before {
    background: #ff6699;
  }
  .client_businessWoman:before {
    background: #ff6699;
    @media (max-width: 576px) {
      background: #66cccc;
    }
    @media (max-width: 400px) {
      background: #ff6699;
    }
  }
  .client_freelancer:before {
    @media (max-width: 576px) {
      background: #ff6699;
    }
    @media (max-width: 400px) {
      background: #66cccc;
    }
  }
  .client_expert:hover::before,
  .client_mentor:hover::before,
  .client_freelancer:hover::before,
  .client_manager:hover::before,
  .client_businessWoman:hover::before,
  .client_sales:hover::before {
    transform: scale(0);
    transition: all 0.3s linear;
  }
`;
