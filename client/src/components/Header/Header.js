import React from 'react';
import 
 {  BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
          <a href='/' style={{textDecoration:"none", color:"#9e9ea4"}} > 
            <h2>Globus <span style={{backgroundColor:"#db0a0a", color:"white", padding:"5px"}}>Labs</span></h2>
            </a>
        </div>
        {/* <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon mx-3'/>
            <BsPersonCircle className='icon'/>
        </div> */}
    </header>
  )
}

export default Header