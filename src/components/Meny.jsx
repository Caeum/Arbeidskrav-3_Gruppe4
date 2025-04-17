import React from 'react';
import { Link } from 'react-router-dom';

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

export default Meny;