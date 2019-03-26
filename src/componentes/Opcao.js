import React from 'react';
import '../css/css.scss';
import { withRouter } from "react-router-dom";
/**
 * Este componente tem dois botoes principais
 * serão roteadoos para cada tela
 */
/**
 * Transformei num função para pegar o history das paginas
 */
const Opcao = ({ history }) => (
  <React.Fragment>
    <div className='container_menu'>
      <div className='opcao'>
        <p className='texto'>Serviços</p>
        <button className='opcao opcao__botao' onClick={() => {
          history.push("/turmas");
        }}><i class="material-icons icon md-48">border_color</i>Aula Teórica</button>
      </div>
      <div className='opcao'>
        <p className='texto'>Cadastros</p>
        <button className='opcao opcao__botao' onClick={() => {
          history.push("/alunos");
        }}><i class="material-icons icon md-48">person</i>Alunos</button>
      </div>
    </div>
  </React.Fragment>
);

export default withRouter(Opcao);