import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


export const NavBar = () => { 
    return ( <div>
        <div className="my-3">
        <a href="#"><img src= 'https://i.ibb.co/BrtG6Qw/logo.png' alt = 'logo' className='logo' /></a>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Todas las categorias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">3 piezas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">2 piezas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Todo en uno</a>
        </li>
        <li className="nav-item">
          <a className="nav-link azul"><CartWidget /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    );
}

export default NavBar;