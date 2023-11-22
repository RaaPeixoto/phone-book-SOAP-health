import { styled } from "styled-components";
import { IoMdClose } from "react-icons/io";
const ModalPageContainer = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CloseIcon = styled(IoMdClose)`
  width: 25px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #73797f;
  cursor: pointer;
`;
const ModalContainer = styled.div`
  position: relative;
  background-color: #FFFFFF;
  padding: 30px 10px 20px 30px;
  max-width: 600px;
  width: 90%;
  overflow-y: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h4 {
    margin-bottom: 30px;
    color: #73797f;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Form = styled.form`
  h5 {
    margin-left: 5px;
    color:#73797f;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
  }
  input[type="text"] {
    margin: 10px 0;
    width: 90%;
    height: 30px;
    padding: 0 10px;
  }


`;

const ButtonsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    font-size: 14px;
    cursor: pointer;
    padding: 5px 20px;
    border: 0.5px solid #73797f;
    background-color:#FFFFFF;
    color: #73797f;
    border-radius: 5px;
  }
  button[type="submit"] {
    margin: 0 10px 0 20px;
    border: none;
    color:#FFFFFF;
    background-color: #347BF6;
  }
`;
export { ModalPageContainer, ModalContainer, Form, CloseIcon,  ButtonsContainer };
