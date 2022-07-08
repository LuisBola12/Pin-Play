import { React } from 'react';
import './DropDown.scss';

export const DropDown = (props) =>{
  const handleChange = (e) => {
    e.preventDefault();
    props.setCategory(e.target.value);
    props.setActualPage(1);
  };
  return(
    <div className='clasify-dropdwon'>
      <select
      onChange={(e) => { handleChange(e)} }
      >
        {props.options.map((element) => (
          <option key={element.Category} value={element.Category}>{element.Category}</option>
        ))}
  </select>
    </div>
  )
}