// import { useDispatch, useSelector } from 'react-redux';
// import { React, useState } from 'react';
// import { Button } from '../Button/Button';
import './DropDown.scss';

export const DropDown = ({title, options}) =>{
  
  return(
    <div className='clasify-dropdwon'>
      <select>
        {options.map((element) => (
          <option key={element.value} value={element.Nombre}>{element.Nombre}</option>
        ))}
  </select>
    </div>
  )
}