import React from 'react';

const NavBar = (props)=>(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top pb-2">
  <a className="navbar-brand" href="/">Monitoramento Covid-19 |</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className={`nav-item ${props.act1}`}>
        <a className="nav-link" href="/">Resumo global </a>
      </li>
      <li className={`nav-item ${props.act2}`}>
        <a className="nav-link" href="/countries">Visão por países</a>
      </li>
      <li className={`nav-item ${props.act3}`}>
        <a className="nav-link" href="/recommendations">Recomendações</a>
      </li>
    </ul>
  </div>
</nav>
)

export default NavBar;