import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteTodo } from '../actions/todos';

function TaskItem({ id,  text, onClickHandler }) {
  const [isChecked, toggleChecked] = useState(false);
  const dispatch = useDispatch();

  const handleChecked = (id) => {
    toggleChecked(true);

    onClickHandler();
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={isChecked}
        onClick={handleChecked}
      />
      <label>{text}</label>

      <button className="edit">Editar</button>
      <button onClick={handleDelete} className="delete">Deletar</button>
    </li>
  )
}

export default TaskItem;
