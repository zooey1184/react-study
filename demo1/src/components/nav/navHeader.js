import React from 'react'
import './nav.less'

const nav = ({img, title})=> {
  return (
    <div className='c-nav_header'>
      <img src={img} alt='header'/>
      {title}
    </div>
  )
}

export default nav