import React from 'react';
import uuid from "uuid/v1";



import ServicoTurma from '../componentes/servicos/ServicoTurma';
import NovaTurma from './NovaTurma';
import ListaTurma from './ListaTurma';
export class Turmas extends React.Component {

  state = {
    turmas: [
   
    ],
    isLoading: true,
    reloadHasError: false,
    saveHasError: false,
    isMenuOpen: false
  };


  //Adciona a turma
  handleAddTurma = text => {
    this.setState(prevState => {
      const turmas = prevState.turmas.concat({ id: uuid(), text });
      this.handleSaveTurma(turmas);
      return { turmas };
    });
  }

  //Salva a turma 
  handleSaveTurma = turmas => {
    this.setState({ isLoading: true, saveHasError: false });
    ServicoTurma.save(turmas).then(() => {
      this.setState({ isLoading: false });
    }).catch(() => {
      this.setState({ isLoading: false, saveHasError: true });
    });

  };
  
  //Recarrega a turma
  handleReloadTurma = () => {
    this.setState({ isLoading: true, reloadHasError: false });
    ServicoTurma.load().then(turmas => {
      this.setState({ turmas, isLoading: false });
      console.log(turmas);
    }).catch(() => {
      this.setState({ isLoading: false, reloadHasError: true });
    })
  };

  componentDidMount() {
    this.handleReloadTurma()

  }

  //Deleta a turma
  handleDeleteTurma = id => {
    this.setState(prevState => {
      const novaTurma = prevState.turmas.slice();
      const index = novaTurma.findIndex(turma => turma.id === id)
      novaTurma.splice(index, 1);
      this.handleSaveTurma(novaTurma);
      return {
        turmas: novaTurma
      };
    });
  };
  



  render() {
    const { turmas } = this.state;
    return (
      <React.Fragment>
        <div className='turmas'>
          <h1 className='turmas__texto'>Aula Teórica</h1>
          <NovaTurma onAddTurma={this.handleAddTurma} />
          <ListaTurma onRetry={this.handleReloadTurma}
            turmas={turmas}
            onDelete={this.handleDeleteTurma} />
        </div>
      </React.Fragment>
    )
  }
}

export default Turmas;
