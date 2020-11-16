import React from 'react';


const Avatar = ({ image, name, lastName }) => (
  <div className='character-container'>
    <img src={image} alt={name} />
    <h1>{name} {lastName}</h1>
  </div>
)


export default Avatar;
