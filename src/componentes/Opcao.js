import React from 'react';
import '../css/css.scss';
import { withRouter } from "react-router-dom";
/**
 * Este componente tem dois botoes principais 
 * ser?o roteadoos para cada tela 
 */

class Opcao extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div className='container_menu'>
          <div className='opcao'>
            <p className='texto'>Serviços</p> 
            <button className='opcao opcao__botao'><i class="material-icons icon md-48">border_color</i>Aula Teórica</button>
          </div>
          
          <div className='opcao'>
            <p className='texto'>Cadastros</p>
              <button className='opcao opcao__botao'><i class="material-icons icon md-48">person</i>Alunos</button>
          </div>
        </div>
        </React.Fragment> 
             
     
    );
  }
}

export default withRouter(Opcao);