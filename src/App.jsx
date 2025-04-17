import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import HomePage from './components/HomePage'
import Gruppen from './components/Gruppen'

const gruppeteam = "teamet vårt";
const personer = [
  { id: 'sophia', fornavn: 'Sophia', bilde: 'bildeavsophia.png', beskrivelse: 'tekst', rolle: 'student'},
  { id: 'Ikram', fornavn: 'Ikram', bilde: 'bildeavikram.png', beskrivelse: 'tekst', rolle: 'student'},
  { id: 'Rebecka', fornavn: 'Rebecka', bilde: 'bildeavrebecka.png', beskrivelse: 'tekst', rolle: 'student'},
  { id: 'Mohammed', fornavn: 'Mohammed', bilde: 'bildeavmohammed.png', beskrivelse: 'tekst', rolle: 'student'},
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
