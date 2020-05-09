import { todosActionTypes } from '../constants/todos';

const INITIAL_STATE = {
  todos: [
    {
      id: 1,
      text: 'Pagar contas',
      completed: false,
    }
  ],
  incompletedTodos: [],
  completedTodos: [],
};

export const todosReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case todosActionTypes.ADD_TODO:
      const item = {
        id: payload.id,
        text: payload.text,
        completed: false,
      }

      return {
        ...state,
        todos: [...state.todos, item]
      }
    default:
      return state;
  }
}



