import React, { Component } from 'react';

// Reactstrap
import { Container, Row, Col } from 'reactstrap';

// Redux
import reducers from "./redux/reducers";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Containers
import SearchBar from './containers/search-bar/';

// Styles
import './assets/scss/main.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class App extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Container fluid={true}>
                <Container>
                    <header className='mb-5'>header</header>
                    <main>
                        <SearchBar />
                    </main>
                    <footer className='mt-5'>footer</footer>
                </Container>
            </Container>
        </Provider>
    );
  }
}
