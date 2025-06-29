import React from 'react';
import { useState } from 'react' 


  

function Card(props) {

    let str="santosh kumar yadav"
const [count, setCount] = useState(props.name.name);

function first() {
    const randomIndex = Math.floor(Math.random() * props.allNames.length);
    setCount(props.allNames[randomIndex].name);
}
  return (
    <div  style={{
      border: '2px solid #ccc',
      padding: '20px',
      borderRadius: '50px',
      marginTop: '20px',
      backgroundColor: '#f9f9f9',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    }}> 
      <h2>Name: {count}</h2>
      <p>Age: {props.name.age}</p>
      <p>City: {props.name.address.city}</p>
      <p>State: {props.name.address.state}</p>
      <button onClick={first} style={
        {
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }
      }>click me</button>
    </div>
  );
}

export default Card;
