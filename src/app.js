import React, { Component } from 'react';

// Redux
import reducers from "./redux/reducers";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
          <div>Hello World!</div>
        </Provider>
    );
  }
}
