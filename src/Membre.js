import React from 'react';

const Membre = ({ titre, personne, img }) => {
  return (
    <div>
        <img src={img} alt={personne} style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
        <h2>{titre}</h2>
        <h3>{personne}</h3>
    </div>
  );
};

export default Membre;