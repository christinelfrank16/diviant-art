import React from 'react';
import ForumList from './ForumList';
import PropTypes from 'prop-types';

function ForumGroup(props) {
  var aquaStyle = {
    color: '#9affcd'
  };
  return (
    <div>
      <h4 style={aquaStyle}>{props.groupName}</h4>
      <ForumList />
    </div>
  );
}

ForumGroup.propTypes = {
  groupName: PropTypes.string,
};

export default ForumGroup;