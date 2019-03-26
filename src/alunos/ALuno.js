
import React from 'react';

class Aluno extends React.Component {
    state = {
        inEditing: false
      }
  
      handleEdit=()=>{
        this.setState({ isEditing: true});
      }
  
      handleCancel=()=>{
        this.setState({ isEditing: false});
  
      }
  
      handleSalve=()=>{
        this.props.onEdit(this.props.aluno.id, this.input.value);
        this.setState({isEditing: false});
      }
  

    render() {
        const { aluno, onDelete,onEdit, total,index  } = this.props;
        const { isEditing } = this.state;
        return (

            <div key={aluno.id} className='alunos__novo-aluno'>
               

                {isEditing ? (
                    <input type="text" className="alunos__input" defaultValue={aluno.text} ref={c => { this.input = c; }} />) :
                    (
                        <span className="alunos__novo-aluno__text">{aluno.text}</span>
                    )}
                {isEditing && (
                    <React.Fragment>
                        <button className="alunos__button alunos__button--red" onClick={this.handleCancel}><i class="material-icons">cancel</i></button>
                        <button className="alunos__button alunos__button--green " onClick={this.handleSalve}><i class="material-icons">done_outline</i></button>
                    </React.Fragment>
                )}

    
                <button className="alunos__button"  onClick={this.handleEdit}><i class="material-icons">edit</i></button>


                <button className="alunos__button"><i class="material-icons" onClick={() => {
                    onDelete(aluno.id);
                }}>delete</i></button>
            </div>

        );
    }
}
export default Aluno;