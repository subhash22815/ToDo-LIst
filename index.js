import React from 'react';
import ReactDOM from "react-dom";
import"./index.css";
import"./App.css";
import App from "./App";

ReactDOM.render(<App/>,document.getElementById("root"));
//geting all = document.queryselectotrs(".inputField input");
const inputbox =document.querySelector("inputField input");
const addBtn =document. querySelector("inputField button")
 

inputbox.onkeyup=() => {
    let userData = inputbox. Value; //getting user entered  value 
    if (userData.trim() !=0){ // if user value aren't only spaces 
        addBtn.classList.add("active");//active the add button
    }else{
        addBtn.classList.remove("active");//active the add button 
    }


}