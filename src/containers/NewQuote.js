import React, {Component} from 'react';
import axiosApi from "../axios-api";
import {CATEGORIES} from "../constants";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class NewQuote extends Component {
    state = {
        category: CATEGORIES[0],
        author: '',
        text: ''
    };

    inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

    formSubmitHandler = async (e) => {
        e.preventDefault();

        const quote = {
            category: this.state.category,
            author: this.state.author,
            text: this.state.text
        };

        await axiosApi.post('/quotes.json', quote);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Submit new quote</h1>
                <Form onSubmit={this.formSubmitHandler}>
                    <FormGroup>
                        <Label for="category">Category</Label>
                        <Input type="select" name="category" id="category" value={this.state.category}
                               onChange={this.inputChangeHandler}>
                            {CATEGORIES.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Author</Label>
                        <Input required
                               type="text"
                               name="author"
                               id="author"
                               placeholder="Enter author name"
                               autoComplete='off'
                               value={this.state.author}
                               onChange={this.inputChangeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="text">Quote text</Label>
                        <Input required
                               type="textarea"
                               name="text"
                               id="text"
                               placeholder="Enter text"
                               autoComplete='off'
                               value={this.state.text}
                               onChange={this.inputChangeHandler}/>
                    </FormGroup>
                    <Button color="dark">Save</Button>{' '}
                </Form>
            </div>
        );
    }
}

export default NewQuote;