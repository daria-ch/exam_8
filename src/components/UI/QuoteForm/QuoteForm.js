import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {CATEGORIES} from "../../../constants";

const QuoteForm = props => {
    return (
        <Form onSubmit={props.formOnSubmit}>
            <FormGroup>
                <Label for="category">Category</Label>
                <Input type="select" name="select" id="category" value={props.category} onChange={props.categoryChange}>
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
                       value={props.authorValue}
                       onChange={props.authorOnChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="text">Quote text</Label>
                <Input required
                       type="textarea"
                       name="text"
                       id="text"
                       placeholder="Enter text"
                       autoComplete='off'
                       value={props.textValue}
                       onChange={props.textOnChange}/>
            </FormGroup>
            <Button color="dark">Save</Button>{' '}
        </Form>
    );
};

export default QuoteForm;