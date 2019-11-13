import React from 'react';
import Picture from './Picture';
import adrien from '../assets/images/adrien.jpg';
import andrii from '../assets/images/andrii.jpg';
import annie from '../assets/images/annie.jpg';
import canmandawe from '../assets/images/canmandawe.jpg';
import eberhard from '../assets/images/eberhard.jpg';
import henry from '../assets/images/henry.jpg';
import jeremy from '../assets/images/jeremy.jpg';
import joel from '../assets/images/joel.jpg';
import joshua from '../assets/images/joshua.jpg';
import mark from '../assets/images/mark.jpg';
import scott from '../assets/images/scott.jpg';
import tom from '../assets/images/tom.jpg';
import vincent from '../assets/images/vincent.jpg';
import yancy from '../assets/images/yancy.jpg';
import zoltan from '../assets/images/zoltan.jpg';

function PictureList() {
  const imgNames = [
    adrien,
    andrii,
    annie,
    canmandawe,
    eberhard,
    henry,
    jeremy,
    joel,
    joshua,
    mark,
    scott,
    tom,
    vincent,
    yancy,
    zoltan
  ];
  const imageList = imgNames.map(function(name){
    var pict = {
      img: name,
      title: 'placeholder',
      username: 'userholder'
    };
    return pict;
  });
  var flex = {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  };
  // var masterPictureList = images.map((img, index) =>
  //   { img: img,
  //     title: 'placeholder',
  //     username: 'userholder'
  //   });
  return (
    <div style={flex}>
      {imageList.map((imageRef, index) => 
        <Picture img={imageRef.img} 
          title={imageRef.title} 
          username={imageRef.username} 
          key={index}/>
      )}
    </div>
  );
}

export default PictureList;