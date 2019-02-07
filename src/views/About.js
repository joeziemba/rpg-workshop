import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
  return (
    <React.Fragment>
      <nav class="navbar fixed-top">
        <Link to='/' className="navbar-brand mb-0 h1">Statblock Generator</Link>
      </nav>
      <div className="page-container">
        <h1 className="mt-4">About</h1>
        <p>
          This statblock generator is a custom tool built and maintained by an independent web developer who just happens to be a big fan of Dungeons & Dragons.
        </p>
      </div>
    </React.Fragment>
  )
}

export default About;