import React from 'react';

class Turma extends React.Component {

    render() {
        const { turma, onDelete } = this.props;
        return (
            <div>

                <div key={turma.id} className='turmas__nova-turma'>
                    <span className="turmas__nova-turma__text">{turma.text}</span>
                    <button className="turmas__button"><i class="material-icons">person</i></button>
                    <button className="turmas__button"><i class="material-icons">edit</i></button>
                    <button className="turmas__button"><i class="material-icons" onClick={() => {
                        onDelete(turma.id);
                    }}>delete</i></button>
                </div>

            </div>
        )
    }
}

export default Turma;