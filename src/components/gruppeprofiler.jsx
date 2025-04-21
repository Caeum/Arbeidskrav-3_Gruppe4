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

// Liste over alle personer i gruppen
// Brukes for å generere både meny og visning

const profiler = [
    {
      id: 'ikram',
      fornavn: 'Ikram Morgan',
      etternavn: 'Hassan',
      epost: 'ikrammh@hiof.no',
      bilde: 'bildeavikram.png',
      bio: 'Hei! Jeg heter Ikram Morgan Hassan, er 23 år gammel og bor i Moss. Jeg er lidenskapelig opptatt av kreative uttrykk som å tegne, male og 3D-modellering. Jeg elsker spill, både å spille og skape dem. Nylig har jeg blitt hekta på Pokémon, både kortsamling og selve spillet. På fritiden liker jeg å lese engelske bøker, spesielt innen fantasy, sci-fi og horror. Når jeg er i hyperfokus, kan jeg jobbe i timesvis uten å merke tiden gå.',
      interesser: ['Spill', 'tegne', '3D-modelere', 'bøker', 'figuriner', 'Pokémon'],
      link: '/ikram'
    },
    {
      id: 'sophia',
      fornavn: 'Sophia',
      etternavn: 'Helseth',
      epost: 'sphelset@hiof.no',
      bilde: 'bildeavsophia.png',
      bio: 'Jeg heter Sophia Helseth, og jeg er 27 år, og elsker å løpe og gå tur. Jeg bor i Fredrikstad og liker også å designe, synge, spille gitar, høre på musikk, lese bøker og danse.',
      interesser: ['Løpe', 'Gå tur', 'Danse', 'Lese', 'Designe', 'Synge', 'Spille gitar', 'Høre på musikk'],
      link: '/sophia'
    },
    {
      id: 'rebecka',
      fornavn: 'Rebecka',
      etternavn: 'Westborg',
      epost: 'rebeckw@hiof.no',
      bilde: 'bildeavrebecka.png',
      bio: 'Mitt navn er Rebecka Westborg og jeg er en jente på 21 år som bor i Halden. Der har jeg bodd i snart 7 år. Jeg bodde i Sarpsborg før vi flyttet til Halden, men jeg ble født og oppvokst i Fredrikstad egentlig. Man kan si jeg er årntli østlending. Jeg bor med mamma, pappa, mine 2 søstre, bestemoren min som jeg kaller Mimmi, og en liten hund som heter Tinka.',
      interesser: ['tegne', 'male', 'grafisk design', 'fotografi'],
      link: '/rebecka'
    },
    {
      id: 'mohammed',
      fornavn: 'Mohammed',
      etternavn: 'Yousif',
      epost: 'mohammey@hiof.no',
      bilde: 'bildeavmohammed.png',
      bio: 'Jeg heter Mohammed Yousif, og er 21 år. Jeg ble født i bergen og flyttet til fredrikstad da jeg var 6 år. Da bodde jeg i torp.Nå bor i fredrikstad,lisleby. Der har jeg bodd i 4 år.',
      interesser: ['Fotball', 'Trening', 'Kjøre bil'],
      link: '/mohammed'
    },
  ];

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