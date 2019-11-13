import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../assets/images/logo/div_white.png';

function Header() {
  var imgStyle = {
    width: '120px'
  };
  var navStyle = {
    width: '100%',
    backgroundColor: 'rgba(6,7,14,0.87)',
    overflow: 'auto'
  };
  var aStyle = {
    float: 'left',
    textAlign: 'center',
    padding: '16px',
    color: 'white',
    fontSize: '20px'
  };
  return (
    <div className='navbar' style={navStyle}>
      <img src={Div} style={imgStyle}/>
      <p><Link style={aStyle} to="/">Diviations</Link><Link style={aStyle} to="/forum">Forum</Link></p>
    </div>
  );
}

export default Header;