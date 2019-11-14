import React from 'react';
import Forum from './Forum';

function ForumList() {
  var forums = [
    {
      title: 'Diviants',
      description: 'The official DiviantArt message forum for general based discussion',
      latestThread: 'Mixing oils and acrylics...',
      topicCount: 5991,
      postCount: 15782
    },
    {
      title: 'Welcome Center',
      description: 'Lets offer a warm welcome to the newest diviants!',
      latestThread: 'HI GUYS!',
      topicCount: 2397,
      postCount: 130784
    },
    {
      title: 'Projects',
      description: 'Post about your community project, art trade, or personal contest here',
      latestThread: 'Poka-dot challenge deluxe',
      topicCount: 81,
      postCount: 2396
    }
  ];
  return (
    <div>
      {forums.map((forum, index) => 
        <Forum title={forum.title}
          description={forum.description}
          latestThread={forum.latestThread}
          topicCount={forum.topicCount}
          postCount={forum.postCount}
          key={index} />
      )}
    </div>
  );
}

export default ForumList;