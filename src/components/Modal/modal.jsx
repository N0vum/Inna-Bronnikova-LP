import React from "react";
import { StyledModal } from "./modal.styled";
const  Modal=({active, setActive, children})=>{

return(
<StyledModal>
<div className={active ? 'modal active' : "modal"} onClick={()=> setActive(false)}>
<div className={active ? 'modal_content active' : "modal_content"} onClick={e=> e.stopPropagation()}>
{children}
</div></div>
</StyledModal>
      )
}
export default Modal;