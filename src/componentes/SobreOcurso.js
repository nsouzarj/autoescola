import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

export class SobreOcurso extends React.Component {
     render(){
         return (
             <div className='sobreocurso'>
            
              <h3 className='sobreocurso__texto'>Curso Auto Escola Senna</h3>
              <p className='sobreocurso__paragrafo'>
                Curso voltado para alunos que precisam aprender dirigir e não fazer m... na rua.
                Fazemos curso de reciclagem para moto taxistas  caminhoneiros etc.
                Telefone de contato: 021-666-6666.
              </p>
             
             </div>

         );
     }

}

export default withRouter(SobreOcurso);

