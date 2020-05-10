import React from 'react';
import { useSelector } from 'react-redux';

function CompletedTasks() {
  const doneTasks = useSelector(state => state.todos.done);

  return (
    <React.Fragment>
      <h3>Completadas</h3>

      <ul id="completed-tasks">
        {doneTasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked />
            <label>{task.text}</label>

            <button className="edit">Editar</button>
            <button className="delete">Delete</button>
          </li>
        ))}

      </ul>
    </React.Fragment>
  );
}

export default CompletedTasks;
