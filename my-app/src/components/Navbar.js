import React from 'react'
import logo from '../images/logo.jpg';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
           DEAR TRAVELLER
    </a>
  </div>
</nav>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Book Your Journey</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Adventurer Diaries</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Choose Your Realm
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Moon Colony – Zero gravity fun & starlit picnics</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/"> Lava Lands – Volcano surfing & molten spa tours</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Underworld Depths – Ghost banquets & mystery caves</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
