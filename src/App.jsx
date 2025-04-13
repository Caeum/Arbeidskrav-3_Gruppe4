import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import Gruppen from './components/Gruppen'

const gruppeteam = "teamet vårt";
const personer = [
  { id: 'sophia', fornavn: 'Sophia', bilde: 'bildeavsophia.png'},
  { id: 'medlem2', fornavn: 'Medlem2', bilde: 'bildeavmedlem2.png'},
  { id: 'medlem3', fornavn: 'Medlem3', bilde: 'bildeavmedlem3.png'},
  { id: 'medlem4', fornavn: 'Medlem4', bilde: 'bildeavmedlem4.png'},
];

function App() {
  <HomePage />
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
