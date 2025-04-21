import React from 'react';
import arbeidslogg from '../assets/arbeidslogg';
import '../styles/gruppen.scss';

// Importer bilder og profil-data her også
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

const profiler = [
  {
    id: 'ikram',
    fornavn: 'Ikram Morgan',
    etternavn: 'Hassan',
    epost: 'ikrammh@hiof.no',
    link: '/ikram'
  },
  {
    id: 'sophia',
    fornavn: 'Sophia',
    etternavn: 'Helseth',
    epost: 'sphelset@hiof.no',
    link: '/sophia'
  },
  {
    id: 'rebecka',
    fornavn: 'Rebecka',
    etternavn: 'Westborg',
    epost: 'rebeckw@hiof.no',
    link: '/rebecka'
  },
  {
    id: 'mohammed',
    fornavn: 'Mohammed',
    etternavn: 'Yousif',
    epost: 'mohammey@hiof.no',
    link: '/mohammed'
  },
];

function HomePage({ gruppeteam }) {
  return (
    <div>
      <h1>Velkommen</h1>
      <p>{gruppeteam}</p>

      {/* PROFILKORTENE */}
      <div className="gruppeprofilene">
        {profiler.map(gruppemedlem => (
          <div key={gruppemedlem.id} className="gruppeprofiler">
            <a href={gruppemedlem.link}>
              <img
                src={bilder[gruppemedlem.id]}
                alt={gruppemedlem.fornavn}
                className="bilde"
              />
              <p>{gruppemedlem.fornavn} {gruppemedlem.etternavn}</p>
              <p>{gruppemedlem.epost}</p>
            </a>
          </div>
        ))}
      </div>

      {/* ARBEIDSLOGG */}
      <h2>Arbeidslogg – Hele Gruppen</h2>
      <ul>
        {arbeidslogg.map((logg, index) => (
          <li key={index}>
            <strong>{logg.navn}</strong> - ({logg.dato}): {logg.oppgave} – {logg.timer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
