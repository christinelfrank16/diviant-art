import React from 'react';
import PropTypes from 'prop-types';

function Picture(props) {
  var userDetailsStyle = {
    position: 'relative',
    top: '-50px',
    backgroundColor: 'rgba(225,225,225,0.5)'
  };
  var imgStyle = {
    maxWidth: '300px'
  };
  var margin = {
    margin: '0'
  };
  var pictStyle = {
    padding: '8px'
  };
  return (
    <div style={pictStyle}>
      <img src={props.img} style={imgStyle}/>
      <div style={userDetailsStyle}>
        <h4 style={margin}>{props.title}</h4>
        <p style={margin}>{props.username}</p>
      </div>
    </div>
  );
}

Picture.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string
};

export default Picture;