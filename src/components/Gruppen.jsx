import React from 'react'

function Gruppen({ person }) {
    return (
        <div className="personer-app">
        <h3>{person.fornavn}</h3>
        <div className="bilder-app">
            <img src={person.bilde} alt={person.fornavn} />
            </div>
            </div>
    );
}

export default Gruppen;