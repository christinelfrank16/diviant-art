import React from 'react';
import PropTypes from 'prop-types';

function Picture(props) {
  var parentStyle = {
    position: 'absolute'
  };
  var userDetailsStyle = {
    position: 'relative',
    top: '-50px'
  };
  var imgStyle = {
    maxWidth: '300px'
  };
  return (
    <div style={parentStyle}>
      <img src={props.img} style={imgStyle}/>
      <div style={userDetailsStyle}>
        <h5>{props.title}</h5>
        <p>{props.username}</p>
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