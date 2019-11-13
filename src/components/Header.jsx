import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../assets/images/logo/div_white.png';

function Header() {
  var imgStyle = {
    width: '120px'
  };
  return (
    <div className='navbar'>
      <img src={Div} style={imgStyle}/>
      <Link to="/">Diviations</Link> | <Link to="/forum">Forum</Link>
    </div>
  );
}

export default Header;