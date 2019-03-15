import React from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";

const MenuLateral= ({isOpen, onCloseMenu, history})=>(
    <div
    className={classNames("navegacao-drawer", {
      "navegacao-drawer--open": isOpen
    })}>
    <div className="navegacao-drawer__head">
      <button className="navegacao-drawer__head__button" 
         onClick={()=> {onCloseMenu(); }}>
        <i className="material-icons">close</i>
      </button>
    </div>
    <div className="navegacao-drawer__menu">

    <button
    className="navegacao-drawer__menu__item"
    onClick={() => {
      onCloseMenu();
      history.push("/");
    }}
  >
    <i className="material-icons">menu</i> Menu
  </button>
     
      <button
        className="navegacao-drawer__menu__item"
        onClick={() => {
          onCloseMenu();
          history.push("/aulas");
        }}
      >
        <i className="material-icons">border_color</i> Aula Teorica
      </button>
      <button
        className="navegacao-drawer__menu__item"
        onClick={() => {
          onCloseMenu();
          history.push("/alunos");
        }}
      >
        <i className="material-icons">person</i> Alunos
      </button>

      <button
        className="navegacao-drawer__menu__item"
        onClick={() => {
          onCloseMenu();
          history.push("/sobre");
        }}
      >
        <i className="material-icons">info</i> Sobre
      </button>
    </div>
  </div>
);

export default withRouter(MenuLateral);

