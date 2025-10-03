import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";
import bemCssModules from 'bem-css-modules';
import { Link, Route } from "react-router-dom";
import { StoreContext } from '../store/StoreProvider';
import { useContext } from 'react'; 
import '../sass/header.sass'

const Header = () => {

  const {user, setUser} = useContext(StoreContext);
  const setProperlyLabel = Boolean(user) ? user.name : 'Zaloguj się';

    return (
        <header className="header">
            <div className="header__logo">
              <div></div>
              <h1> Kursy! </h1>
              <button>{setProperlyLabel}</button>
            </div>
        </header>
    );
}

export default Header;