import React from 'react';
import { withRouter } from "react-router-dom";

class Alunos extends React.Component  {
    render(){
        return (
            <React.Fragment>
            <div className='alunos'>
                <h1 className='alunos__texto'>Alunos</h1>
            </div>  
            </React.Fragment>
   
        );
    }
}
export default withRouter(Alunos);