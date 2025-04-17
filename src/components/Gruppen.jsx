import React from 'react';

function Gruppen({ person }) {
  return (
    <div className="personer-app">
      <h3>{person.fornavn}</h3>
      <div className="bilder-app">
        <img src={person.bilde} alt={person.fornavn} />
      </div>
      {person.fornavn && <p>Fornavn: {person.fornavn}</p>}
      {person.etternavn && <p>Etternavn: {person.etternavn}</p>}
      {person.epost && <p>E-post: {person.epost}</p>}
      {person.beskrivelse && <p>Beskrivelse: {person.beskrivelse}</p>}
      </div>
        );
    }    

export default Gruppen;