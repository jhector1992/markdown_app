import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { Trash, Detail } from './icons';
import Util from '../utils/util'

function Item(props) {
  let match = useRouteMatch();
  let date = new Date(props.item.created);
  return(
    <tr>
      <td>{ props.item.title }</td>
      <td>{ props.item.author }</td>
      <td>{ Util.formatDate(date)  }</td>
      <td>
        <p className="hover">

          <Link className="nav-link" to={`${match.url}/${props.item.id}`}> <Detail /> </Link>
        </p>
          <Link className="nav-link" to={`${match.url}/${props.item.id}`}> <Trash /> </Link>
      </td>
    </tr>
  );
}

export default Item;