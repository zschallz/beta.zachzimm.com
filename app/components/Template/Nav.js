import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/zach.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Zach Zimmerman</h2>
        <p><a href="mailto:zach@zachzimm.com">zach@zachzimm.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Zach.
        <p>I&apos;m an Engineering Manager at <a href="https://economist.com/">The Economist</a> in Birmingham, UK.</p>
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Zachary Zimmerman <Link to="/">zachzimm.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
