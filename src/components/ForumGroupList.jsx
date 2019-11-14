import React from 'react';
import ForumGroup from './ForumList';

function ForumGroupList() {
  var groups = [
    {
      groupName: 'DiviantArt'
    },
    {
      groupName: 'What Is a Div?'
    },
    {
      groupName: 'Div you see that?'
    },
    {
      groupName: 'Showcase'
    }
  ];
  return (
    <div>
      {groups.map((group, index) => 
        <ForumGroup groupName={group.groupName}
          key={index}/>
      )}
    </div>
  );
}

export default ForumGroupList;