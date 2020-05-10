import { combineReducers } from 'redux';

// Importa os estados de cada reducer separadamente
import { todosReducer } from './todos';
import { appReducer } from './app';

// unifica todas as stores em uma única store global
const rootReducer = combineReducers({
  appInfo: appReducer,
  todos: todosReducer,
});

export default rootReducer;
