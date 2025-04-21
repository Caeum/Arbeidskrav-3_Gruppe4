import React from 'react';
import '../styles/gruppen.scss';
import arbeidslogg from '../assets/arbeidslogg';

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
  const personLogg = arbeidslogg.filter(logg => logg.id === person.id);

  return (
    <div className="personer-app">
      <h1>{person.fornavn} {person.etternavn}</h1>
      <div className="bilder-app">
        <img src={bilder[person.id]} alt={person.fornavn} />
      </div>
      {person.bio && <p>{person.bio}</p>}

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

      {/* Arbeidslogg-delen */}
      {personLogg.length > 0 && (
        <div className="arbeidslogg">
          <h2>Arbeidslogg</h2>
          <ul>
            {personLogg.map((logg, index) => (
              <li key={index}>
                <strong>{logg.navn}</strong> - {logg.dato}: {logg.oppgave} – {logg.timer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Gruppen;
