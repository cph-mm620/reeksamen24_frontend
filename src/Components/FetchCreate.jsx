import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';

function FetchCreate() {

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }


  return(
    <div className="wrapper">
      <h1>Create a race</h1>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Name of driver</p>
           <input name="name" />
         </label>
         <label>
           <p>Choose location:</p>
           <select>
        <option value="Spain">Spain</option>
        <option value="Italy" selected>Italy</option>
        <option value="Monaco">Monaco</option>
          </select>
         </label>
         <label>
           <p>Choose Car:</p>
           <select>
        <option value="Aston Martin">Aston Martin</option>
        <option value="Mercedes" selected>Mercedes</option>
        <option value="Mclaren">Mclaren</option>
          </select>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FetchCreate;
