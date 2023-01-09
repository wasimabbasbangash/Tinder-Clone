import React from "react";
import Logo from "./Logo";
import userImage from "../misc/user.png";
import messagesImage from "../misc/messages.png";

function Header() {
  return (
    <header className='header'>
      <div className='f1'>
        <button type='button'>
          <img src={userImage} alt='user image not availble'></img>
        </button>
      </div>
      <div className='f1'>
        <Logo></Logo>
      </div>
      <div className='f1'>
        <img
          style={{ width: "42px", marginRight: "10px" }}
          src={messagesImage}
          alt='message icon not availablee'
        ></img>
      </div>
    </header>
  );
}

export default Header;
