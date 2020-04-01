import React from 'react';

const NavBar = ()=>(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a className="navbar-brand" href="#">Monitoramento Covid-19 |</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Resumo global <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/countries">Visão por países</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/countries">Recomendações</a>
      </li>
    </ul>
  </div>
</nav>
)

export default NavBar;