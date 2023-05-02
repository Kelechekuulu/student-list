import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import "./App.css";

 function App() {

  const [data, setData] = useState([])
  const [newDate, setNewDate] = useState();
  useEffect(()=>{

  fetch ('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => setData(json));
  },[]);

  async function fetchData(id){
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const responseData = await  response.json();
    setNewDate(responseData);
  }
  useEffect(()=>{
    fetchData()
  },[]);
  return (
    <div className="App">
      <h1>Student List</h1>
      {data.map((el)=><Style onClick ={()=>fetchData(el.id) } key={el.id}>{el.name}</Style>)}
      {newDate&&<div className="color">
        <p>{newDate.name}</p>
        <p>{newDate.id}</p> 
        <p>{newDate.email}</p>
        </div>}
    </div>
  )
}

export default App;


const Style = styled.div`
background-color: red;
margin-top: 5px;
border: 1px solid;
width:200px;
height:40px;
text-align:center;
`


