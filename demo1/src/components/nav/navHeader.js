import React from 'react'
import './nav.less'
const loginOut = function() {
  window.localStorage.clear('login')
}
const nav = ({img, title})=> {
  return (
    <div className='c-nav_header'>
      <img src={img} alt='header'/>
      {title}
      <button onClick={loginOut}>退出</button>
    </div>
  )
}

export default nav