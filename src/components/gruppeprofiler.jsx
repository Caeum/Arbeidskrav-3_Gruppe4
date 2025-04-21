import React from 'react';
import '../styles/gruppen.scss'

// Importerer bilder for hver person
import sophiaBilde from '../website_images/bildeavsophia.png';
import ikramBilde from '../website_images/bildeavikram.png';
import rebeckaBilde from '../website_images/bildeavrebecka.png';
import mohammedBilde from '../website_images/bildeavmohammed.png';

// Lager et objekt som kobler ID til bilde
const bilder = {
  sophia: sophiaBilde,
  ikram: ikramBilde,
  rebecka: rebeckaBilde,
  mohammed: mohammedBilde,
};

// Profilkort
  function Gruppeprofiler({ gruppemedlem }) {
    return (
      <div className="gruppeprofiler">
        <a href={gruppemedlem.link}>
        <img src={bilder[gruppemedlem.id]} alt={gruppemedlem.fornavn} className="bilde" />
        <p>{gruppemedlem.fornavn} {gruppemedlem.etternavn}</p>
          <p>{gruppemedlem.navn} {gruppemedlem.epost}</p>
        </a>
      </div>
    );
  }

// Samler og viser alle profilkort
  function Gruppeprofilene() {
    return (
      <div className="gruppeprofilene">
        {profiler.map(gruppemedlem => (
          <Gruppeprofiler key={gruppemedlem.id} gruppemedlem={gruppemedlem} />
        ))}
      </div>
    );
  }

  export default Gruppeprofilene;