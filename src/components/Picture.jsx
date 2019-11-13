import React from 'react';
import PropTypes from 'prop-types';

function Picture(props) {
  var userDetailsStyle = {
    paddingLeft: '5px',
    marginTop: '-55px'
  };
  var imgStyle = {
    width: '100%',
    height: 'auto'
  };
  var margin = {
    margin: '0',
    color: 'white'
  };
  var pictStyle = {
    padding: '8px',
    width: 'inherit'
  };
  return (
    <div style={pictStyle}>
      <style global jsx>{`
        .col {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <img className={props.float} src={props.img} style={imgStyle}/>
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
  username: PropTypes.string,
  float: PropTypes.string
};

export default Picture;