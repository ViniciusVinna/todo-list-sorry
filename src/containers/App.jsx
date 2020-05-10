import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '../store';

import AddNewItem from './AddNewItem';
import CompletedTasks from './CompletedTasks';
import IncompleteTasks from './IncompleteTasks';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="container">
          <AddNewItem />

          <IncompleteTasks />

          <CompletedTasks />
        </div>
      </PersistGate>
    </Provider>
  )
};

export default App;
