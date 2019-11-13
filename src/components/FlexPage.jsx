import React from 'react';
import PictureList from './PictureList';

function FlexPage() {
  var flex = {
    display: 'flex',
    alignItems: 'stretch'
  };
  return (
    <div style={flex}>
      <PictureList/>
    </div>
  );
}

export default FlexPage;