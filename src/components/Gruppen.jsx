import React from 'react';
import '../styles/gruppen.scss'
// Importerer bildene
import sophiaBilde from '../website_images/bildeavsophia.png';
import ikramBilde from '../website_images/bildeavikram.png';
import rebeckaBilde from '../website_images/bildeavrebecka.png';
import mohammedBilde from '../website_images/bildeavmohammed.png';

const bilder = {
  sophia: sophiaBilde,
  ikram: ikramBilde,
  rebecka: rebeckaBilde,
  mohammed: mohammedBilde,
};

function Gruppen({ person }) {
  return (
    <div className="personer-app">
      <h1>{person.fornavn} {person.etternavn}</h1>
      <div className="bilder-app">
        <img src={bilder[person.id]} alt={person.fornavn} />
      </div>
      {/*{person.fornavn && <p>Fornavn: {person.fornavn}</p>}
      {person.etternavn && <p>Etternavn: {person.etternavn}</p>}
      {person.epost && <p>E-post: {person.epost}</p>} */}
      {person.bio && <p>{person.bio}</p>}
      {/* Viser interesser, hvis lista finnes og ikke er tom */}
      {person.interesser && person.interesser.length > 0 && (
        <div className="interesser">
          <h2>Interesser</h2>
          <ul>
            {person.interesser.map((interesse, index) => (
              <li key={index}>{interesse}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Gruppen;