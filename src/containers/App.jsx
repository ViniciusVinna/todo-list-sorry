import React from 'react';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <p>
        <label htmlFor="new-task">Novo Item
        </label><input id="new-task" type="text" />
        <button>Adicionar</button>
      </p>

      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        <li>
          <input type="checkbox" />
          <label>Pagar Contas</label>

          <button className="edit">Editar</button>
          <button className="delete">Deletar</button>
        </li>

        <li className="editMode">
          <input type="checkbox" />
          <label>Fazer Compras</label>

          <input type="text" value="Fazer Compras" />

          <button className="edit">Editar</button>
          <button className="delete">Deletar</button>
        </li>
      </ul>

      <h3>Completadas</h3>
      <ul id="completed-tasks">
        <li>
          <input type="checkbox" checked />
          <label>Visitar o Médico</label>

          <button className="edit">Editar</button>
          <button className="delete">Delete</button>
        </li>
      </ul>
    </div>
  )
};

export default App;
