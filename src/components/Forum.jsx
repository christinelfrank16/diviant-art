import React from 'react';
import PropTypes from 'prop-types';

function Forum(props) {
  var numbers = {
    textAlign: 'center'
  };
  return (
    <div>
      <div className='row'>
        <div className='col'>
          <h6>{props.title}</h6>
          <p>{props.description}</p>
          <p>{props.latestThread}</p>
        </div>
        <div className='col' style={numbers}>
          <p>{props.topicCount}</p>
        </div>
        <div className='col' style={numbers}>
          <p>{props.postCount}</p>
        </div>
      </div>
    </div>
  );
}

Forum.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  latestThread: PropTypes.string,
  topicCount: PropTypes.number,
  postCount: PropTypes.number
};

export default Forum;