import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <header className='header'>
      <div className='f1'>
        <button type='button'>
          <img src='/images/misc/user.png' alt='user image not availble'></img>
        </button>
      </div>
      <div className='f1'>
        <Logo></Logo>
      </div>
      <div className='f1'>
        <img
          style={{ width: "42px", marginRight: "10px" }}
          src='/images/misc/messages.png'
          alt='message icon not availablee'
        ></img>
      </div>
    </header>
  );
}

export default Header;
