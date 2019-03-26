import React from 'react';
import uuid from "uuid/v1";

import NovoAluno from './NovoAluno';
import ListaAluno from './ListaAluno';
import ServicoAluno from '../componentes/servicos/ServicoAluno';
class Alunos extends React.Component {

  state = {
    alunos: [
    ],
    isLoading: true,
    reloadHasError: false,
    saveHasError: false,
    isMenuOpen: false
  };

  //Adciona o aluno
  handleAddAluno = text => {
    this.setState(prevState => {
      const alunos = prevState.alunos.concat({ id: uuid(), text });
      this.handleSaveAluno(alunos);
      return { alunos };
    });
  }

 //Deleta o aluno
  handleDeleteAluno = id => {
    this.setState(prevState => {
      const novoAluno = prevState.alunos.slice();
      const index = novoAluno.findIndex(aluno => aluno.id === id)
      novoAluno.splice(index, 1);
      this.handleSaveAluno(novoAluno);

      return {
        alunos: novoAluno
      };
    });
  };


  //Salva o aluno
  handleSaveAluno = alunos => {
    this.setState({ isLoading: true, saveHasError: false });
    ServicoAluno.save(alunos).then(() => {
      this.setState({ isLoading: false });
    }).catch(() => {
      this.setState({ isLoading: false, saveHasError: true });
    });

  };
  
  //Edita o aluno
  handleEditAluno=(id, text)=>{
    this.setState(prevState=>{
      const novoAluno= prevState.alunos.slice();
      const index = novoAluno.findIndex(note => note.id===id)
      novoAluno[index].text = text;
      this.handleSaveAluno(novoAluno);
      return {
        notes: novoAluno
      };
    });
  };


  //Recarrega a lide de alunos atraves da função load do ServicoAluno
  handleReloadAluno = () => {
    this.setState({ isLoading: true, reloadHasError: false });
    ServicoAluno.load().then(alunos => {
      this.setState({ alunos, isLoading: false });
      console.log(alunos);
    }).catch(() => {
      this.setState({ isLoading: false, reloadHasError: true });
    })
  };

  componentDidMount() {
    this.handleReloadAluno();

  }


  render() {
    const { alunos } = this.state;
    return (
      <React.Fragment>

        <div className='alunos'>
          <h1 className='alunos__texto'>Alunos</h1>
          <NovoAluno onAddAluno={this.handleAddAluno} />
          <ListaAluno onRetry={this.handleReloadAluno}
            alunos={alunos}
            onDelete={this.handleDeleteAluno}
            onEdit={this.handleEditAluno} />

        </div>

      </React.Fragment>

    );
  }
}
export default Alunos;