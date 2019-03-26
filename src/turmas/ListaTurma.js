import React from 'react';
import Turma from './Turma';

/**
 * 
 * Lista de turmas feito com base na lista de nomes
 */
const ListaTurma=({turmas, onDelete,onEdit})=>(
    <div className='lista-turmas'>
      {turmas.map((turma,index)=>(
        <Turma
        key={turma.id}
        turma={turma}
        index={index} 
        onDelete={onDelete}
        total={turmas.length} />
      ))}
    </div>
);
export default ListaTurma;    