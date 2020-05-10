import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../actions/todos';

const filmes = [
  'Matrix',
  'Frozen 2',
  'Rei Leão',
  'Madagascar',
]

function AddNewItem() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    const value = event.target.value;

    setInputText(value);
  }

  const handleClick = () => {
    if (!inputText) {

      return;
    }

    dispatch(addTodo(inputText));

    setInputText('');
  }

  return (
    <p>
      <label htmlFor="new-task">
        Novo Item
      </label>

      <input
        id="new-task"
        type="text"
        onChange={handleOnChange}
        value={inputText}
      />

      <button onClick={handleClick}>
        Adicionar
      </button>
    </p>
  );
}

export default AddNewItem;
