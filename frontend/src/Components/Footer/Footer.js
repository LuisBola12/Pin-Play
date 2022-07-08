import React from 'react'
import './Footer.scss';

export const Footer = (props) => {
  return (
    <footer className='footerCopyRights' style={{color:props.color, position:props.position}}> &copy; PinPlay - UCR </footer>
  )
}
