import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import HomePage from './components/HomePage'
import Gruppen from './components/Gruppen'

const gruppeteam = "teamet vårt";
const personer = [
  { id: 'sophia', fornavn: 'Sophia', bilde: 'bildeavsophia.png', etternavn: 'Helseth', epost: 'sphelset@hiof.no', beskrivelse: 'Jeg heter Sophia, og jeg er 27 år, og elsker løping. Jeg bor i Fredrikstad og liker design. interesser: løpe, danse, lese',},
  { id: 'Ikram', fornavn: 'Ikram Morgan', bilde: 'bildeavikram.png', etternavn: 'Hassan', epost: 'ikrammh@hiof.no', beskrivelse: 'kommer',},
  { id: 'Rebecka', fornavn: 'Rebecka', bilde: 'bildeavrebecka.png', etternavn: 'kommer', epost: 'rebeckw@hiof.no', beskrivelse: 'Mitt navn er Rebecka Westborg og jeg er en jente på 21 år som bor i Halden. Der har jeg bodd i snart 7 år. Jeg bodde i Sarpsborg før vi flyttet til Halden, men jeg ble født og oppvokst i Fredrikstad egentlig. Man kan si jeg er årntli østlending. Jeg bor med mamma, pappa, mine 2 søstre, bestemoren min som jeg kaller Mimmi, og en liten hund som heter Tinka. interesser: tegne, male, grafisk design, fotografi',},
  { id: 'Mohammed', fornavn: 'Mohammed', bilde: 'bildeavmohammed.png', etternavn: 'kommer', epost: 'kommer', beskrivelse: 'kommer',},
];

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <div className="container-app">
        <header className="header-app">
          <div className="logo-app">VÅRT TEAM</div>
          <Meny gruppeteam={gruppeteam} personer={personer} />
        </header>
        <div className="innhold-app">
          <Routes>
            <Route path="/" element={<HomePage gruppeteam={gruppeteam} />} />
            {personer.map(person => ( 
              <Route key={person.id} path={`/${person.id}`} element={<Gruppen person={person} />} />
        ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Meny({ gruppeteam, personer }) {
  return (
    <nav className="meny">
      <ul>
        <li>
          <Link to="/">Hjem</Link>
          </li>
          {personer.map(person => (
            <li key={person.id}>
              <Link to={`/${person.id}`}>{person.fornavn}</Link>
              </li>
          ))}
      </ul>
    </nav>
  );
}

export default App;
