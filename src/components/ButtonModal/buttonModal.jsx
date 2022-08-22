import React, {useState} from "react";
import { StyledButtonModal } from "./buttonModal.styled";
import Modal from '../Modal/modal'
import RegistrationForm from "../Form/form";


function ButtonModal() {
const [modalActive, setModalActive] = useState(false);
const modalOpen = () => {
setModalActive(true);
};
return (
<StyledButtonModal  >
<button className="btn" onClick={() => modalOpen()}>
Записаться
</button>
<Modal  active={modalActive}
setActive={setModalActive}>
<RegistrationForm  active={modalActive} setActive={setModalActive}/>
</Modal>
</StyledButtonModal>
);
}

export default ButtonModal;
