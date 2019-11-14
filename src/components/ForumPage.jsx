import React from 'react';
import ForumGroupList from './ForumGroupList';

function ForumPage() {
  var align = {
    textAlign: 'center',
    color: '#9affcd'
  };
  var formStyle = {
    display: 'inline-block',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white'
  };
  var buttonMargin = {
    marginLeft: '10px'
  };
  return (
    <div className='container'>
      <style jsx>{`
        .form-control {
          width: 500px;
        }
      `}</style>
      <h2 style={align}>Forum</h2>
      <form className='form-inline'>
        <p style={formStyle}><input className='form-control' type="text"/>
          <button className='btn btn-dark' style={buttonMargin} type="submit">Search</button></p>
      </form>
      <ForumGroupList/>
    </div>
  );
}

export default ForumPage;