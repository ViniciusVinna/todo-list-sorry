import { todosActionTypes } from '../constants/todos';

const INITIAL_STATE = {
  all: [],
  pending: [],
  done: [],
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
        all: [...state.all, item],
        pending: [...state.all, item].filter(task => !task.completed),
        done: [...state.all, item].filter(task => task.completed),
      }
    case todosActionTypes.TOGGLE_TODO_CHECK:
      return {
        all: [...state.all].map(item => {
          if (item.id === payload.id) {
            return {...item, completed: true }
          }

          return item;
        }),
        pending: [...state.all]
          .filter(tasks => tasks.id !== payload.id)
          .filter(task => !task.completed),
        done: [...state.all]
          .map(item => {
            if (item.id === payload.id) {
              return {...item, completed: true }
            }

            return item;
          })
          .filter(task => task.completed),
      }
    case todosActionTypes.DELETE_TODO:
      const deleteID = payload.id;

      return {
        all: state.all.filter(item => item.id !== deleteID),
        pending: state.pending.filter(item => item.id !== deleteID),
        done: state.done.filter(item => item.id !== deleteID),
      };
    default:
      return state;
  }
}



