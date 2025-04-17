import React from 'react';
import { Link } from 'react-router-dom';
import Profiles from './assets/Profiles';

// Meny-komponent som viser link til Hjem og hver person
function Meny({ profiles }) {
  return (
    <nav className="meny">
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
         {/* Dynamisk generert liste med linker til hver person */}
        {profiles.map(person => (
          <li key={person.id}>
            <Link to={`/${person.id}`}>{person.fornavn}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Meny;