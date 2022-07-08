import React from 'react'
import './Pagination.scss';


export const Pagination = (props) => {
  return (
    <>
        {props.amountPages.map((element) => (
      <div key={element.page} className='pagination'>
        <button className={`pagination__button`} onClick={(e) => {props.handlePage(element.page)}} >{element.page}</button>
      </div>
    ))}
    </>
  )
}
