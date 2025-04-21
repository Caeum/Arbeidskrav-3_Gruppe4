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

        {/* Genererer en meny-lenke for hvert medlem */}
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