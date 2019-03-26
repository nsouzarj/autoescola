import React from 'react';
import classNames from "classnames";

class NovaTurma extends React.Component {
  state = {
    text: ''
  };

  render() {
    const { onAddTurma } = this.props;
    const { text } = this.state;
    return (
      <React.Fragment>
        <div className='turmas__nova-turma'>
          <input type="text"

            value={text}
            className="turmas__nova-turma__input"
            placeholder="Nome da Turma."

            onChange={event => {
              this.setState({
                text: event.target.value
              });
            }}
            onKeyPress={event => {
              if (event.key === "Enter") {
                onAddTurma(event.target.value);
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
              onAddTurma(text);
              this.setState({
                text: ''
              });
            }}>
            <i class="material-icons">star</i>Incluir Turma</button>
        </div>
      </React.Fragment>

    );

  }

}
export default NovaTurma;