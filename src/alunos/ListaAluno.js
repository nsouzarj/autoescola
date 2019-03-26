import React from 'react';
import Aluno from './ALuno';

/**
 * 
 * Lista de alunos feito com base na lista de nomes
 */
const ListaAluno=({alunos, onDelete, onEdit})=>(

    <div className='lista-alunos'>
      {alunos.map((aluno,index)=>(
        <Aluno
        key={aluno.id}
        aluno={aluno}
        index={index} 
        onEdit={onEdit}
        onDelete={onDelete}
        total={alunos.length} />
      ))}
    </div>
);
export default ListaAluno;    