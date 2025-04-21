import React from 'react';
import arbeidslogg from '../assets/arbeidslogg';
import '../styles/gruppen.scss';
import profiles from '../assets/Profiles';

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

function HomePage({ gruppeteam }) {
  return (
    <div>
      <h1>Gruppemedlemmer</h1>
      <p>{gruppeteam}</p>

      {/* Viser alle gruppemedlemmer med bilde, navn og e-post */}
      <div className="gruppeprofilene">
        {profiles.map(gruppemedlem => (
          <div key={gruppemedlem.id} className="gruppeprofiler">
            <a href={`/${gruppemedlem.id}`}>
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

       {/* Viser arbeidslogg for hele gruppa */}
      <h2>Arbeidslogg</h2>
      <ul>
        {arbeidslogg.map((logg, index) => (
          <li key={index}>
            <strong>{logg.navn}</strong> | ({logg.dato}) | {logg.oppgave} – {logg.timer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;