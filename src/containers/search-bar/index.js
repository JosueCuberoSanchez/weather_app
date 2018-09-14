import React, { Component } from 'react';

// Reactstrap
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Components
import MainButton from '../../components/buttons/main-button/';

// Styles
import './search-bar.scss';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term:''}
    }

    onFormSubmit = (e) => {
        e.preventDefault(); // prevent default prevents the browser from making a POST request to the BE, as it does normally.
        // fetch weather data
    };

    onUserInput = (e) => {
        this.setState({term: e.target.value});
    };

    render() {
        return (
            <Form className='d-flex justify-content-between' onSubmit={this.onFormSubmit}>
                <FormGroup className='w-75 mb-0'>
                    <Label for='search'>Search...</Label>
                    <Input id='search' type='text' placeholder='Search a city...' value={this.state.term} onChange={this.onUserInput}/>
                </FormGroup>
                <MainButton text='Submit' className='align-self-end'/>
            </Form>
        )
    }
}

export default SearchBar;