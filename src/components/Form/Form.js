import React from "react";
import Select from "../Select";
import './style.css'

//ф-я ,возвращающая форму
function Form({formName, sendData,selectData,updateId}) {
return(
    <form onSubmit={sendData} >
        <h2 className="text-center text-warning">{formName}</h2>
        <Select selectList={selectData} updateId={updateId}/>
        <button className="form__btn ">Search</button>
    </form>
)
}
export default Form