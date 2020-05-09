import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import AddNewItem from './AddNewItem';
import CompletedTasks from './CompletedTasks';
import IncompleteTasks from './IncompleteTasks';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <AddNewItem />

        <IncompleteTasks />

        <CompletedTasks />
      </div>
    </Provider>
  )
};

export default App;
