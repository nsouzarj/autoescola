import React from "react";


/**
 * Esta barra de menu veio da aplicaçao note
 * Deverá sofrer mudanças em breve
 */
const BarraOpcao =({ isLoading, saveHasError, onOpenMenu })=> (
    <div className="barraopcao">
    <div className="barraopcao__container">
      <button className="barraopcao_action  barraopcao__action" onClick={onOpenMenu}>
        <i className="material-icons">menu</i>
      </button>
       <span className="barraopcao__brand">Auto Escola Senna</span>
        {isLoading && (<button className="barraopcao__action  barraopcao__action--rotation">
           <i className="material-icons">refresh</i>
        </button>)}
        {saveHasError && (
          <button className="barraopcao__action  barraopcao_action--danger">
           <i className="material-icons">cloud_off</i>
        </button>
        )}
      </div>
   
    </div>
);

export default BarraOpcao;