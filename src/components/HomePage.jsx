import React from 'react'

// Enkel startside som viser et velkomsthilsen
function HomePage({ gruppeteam }) {
return (
    <div>
        <h1>Velkommen</h1>
        <p>{gruppeteam}</p>
    </div>
);
}

export default HomePage;