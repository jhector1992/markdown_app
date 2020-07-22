import React, { } from 'react';
import Item from './item'


function Table(props){
  return(
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Creado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        { props.items.map(i => <Item key={i.id} item={i} />) }
      </tbody>
    </table>
    );
  }

export default Table;