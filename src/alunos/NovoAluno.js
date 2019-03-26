import React from 'react';


/**
 * Classe de novo aluno 
 */
class NovoAluno extends React.Component {
  state = {
    text: ''
  };

  render() {
    const { onAddAluno } = this.props;
    const { text } = this.state;
    return (
      <React.Fragment>
        <div className='alunos__novo-aluno'>
          <input type="text"

            value={text}
            className="alunos__novo-aluno__input"
            placeholder="Nome."

            onChange={event => {
              this.setState({
                text: event.target.value
              });
            }}
            onKeyPress={event => {
              if (event.key === "Enter") {
                onAddAluno(event.target.value);
                this.setState({
                  text: ''
                });
              }
            }}
          />
        </div>
        <div className='alinha_botao_inclui'>
          <button className='alinha_botao_inclui__cursor'
            onClick={() => {
              onAddAluno(text);
              this.setState({
                text: ''
              });
            }}>
            <i class="material-icons">person</i>Incluir Aluno</button>
        </div>
      </React.Fragment>

    );

  }

}
export default NovoAluno;