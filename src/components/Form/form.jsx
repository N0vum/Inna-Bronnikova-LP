import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { database } from "../../firebase";
import { ref, push, child, update } from "firebase/database";
import { StyledForm } from "./form.styled";
import Telegram from "../Telegram/telegram";


function RegistrationForm({ active, setActive}) {
  const [isForm, setIsForm] =useState(true)
  const { register, handleSubmit, formState } = useForm();
  const handleChange=()=>{
    setIsForm(false);
 }  
  const onSubmit = (data) => {
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = data;
      handleChange();
        return update(ref(database), updates);
  };


  
  return (
<StyledForm>
{isForm ? <form onSubmit={handleSubmit(onSubmit)} className="form">
{<div className="form_title">
{active ? "Регистрация на консультацию" : null}
</div>}
<div className="form_item">
<input
className="form_item-input"
style={{
borderStyle: formState?.errors?.Name ? "dotted" : "solid",
}}
type="text"
placeholder="Имя"
{...register("Name", {
required: {
value: true,
message: "Пожалуйста, укажите имя",},
})}/>
{!formState.isValid && formState.isSubmitted && (
<div className="form_item-alert">
{formState?.errors?.Name?.message}
</div>)}
</div>
<div className="form_item">
<input className="form_item-input" 
style={{borderStyle: formState?.errors?.MobileNumber
 ? "dotted"
 : "solid",}}
type="tel"
placeholder="Телефон"
{...register("MobileNumber", {
required: {
value: true,
message: "Пожалуйста, укажите номер телефона",},
pattern: {
value: /^[0-9+-]+$/,
message: "Введите корректный номер",
},
minLength: {
value: 6,
message: "Номер слишком короткий. Введите корректный номер.",
},
maxLength: {
value: 12,
message: "Номер слишком длинный. Введите корректный номер.",
},
})}/>
{!formState.isValid && formState.isSubmitted && (
<div className="form_item-alert">
{formState?.errors?.MobileNumber?.message}
</div>
)}
</div>
<div className="form_item">
<input
className="form_item-input"
style={{borderStyle: formState?.errors?.Email ? "dotted" : "solid",
  }}
type="text"
placeholder="E-mail"
{...register("Email", {
required: {
 value: true,
message: "Пожалуйста, укажите e-mail",
},
pattern: {
value: /^\S+@\S+$/i,
message: "Введите корректный e-mail",
},
})}
/>
{!formState.isValid && formState.isSubmitted && (
<div className="form_item-alert">
{formState?.errors?.Email?.message}
</div>
)}
</div>
<button className="btn form_btn"  type="submit">
Отправить
</button>
</form> :  <Telegram/>}

</StyledForm>
);
}

export default RegistrationForm;
