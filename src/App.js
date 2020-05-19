import React from 'react';
import { Provider } from 'react-redux'
import store from './store'

import './App.css';
import homeContainer from './containers/homeContainer';

function App() {
  return (
    <Provider store={store}>
      <homeContainer></homeContainer>
    </Provider>
  );
}

export default App;
