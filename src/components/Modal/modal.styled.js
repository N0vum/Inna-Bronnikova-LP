import styled from "styled-components";

export const StyledModal = styled.div`
  .modal {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    z-index: 1000;

    @media (max-width: 576px) {
      height: 100%;
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .modal.active {
    opacity: 1;
    pointer-events: all;
  }
  .modal_content {
    width: auto;
    height: auto;
    border-radius: 18px;
    background-color: #fff;
    transform: scale(0);
    transition: 0.4s all;
  }
  .modal_content.active {
    transform: scale(1);
  }
`;
