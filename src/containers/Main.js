import React, {Component} from 'react';
import axiosApi from "../axios-api";
import {Button, Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";
import {NavLink, Link, NavLink as RouterNavLink} from "react-router-dom";
import {CATEGORIES} from "../constants";

class Main extends Component {
    state = {
        quotes: []
    };

    request = async () => {
        let url = '/quotes.json';

        if (this.props.match.params.name) {
            url += `?orderBy="category"&equalTo="${this.props.match.params.name}"`;
        }
        const response = await axiosApi.get(url);
        if (response.data) {
            this.setState({quotes: response.data});
        }
    };

    async componentDidMount() {
        this.request();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            return this.request();
        }
    }

    deleteQuote = async (event, id) => {
        await axiosApi.delete('/quotes/' + id + '.json');
        this.props.history.push('/');
        const response = await axiosApi.get('/quotes.json');
        if (response.data) {
            this.setState({quotes: response.data});
        }
    };

    render() {
        return (
            <div className='pt-3'>
                <Row>
                    <Col xs={3}>
                        <ul>
                            <NavLink tag={RouterNavLink} to='/'>All</NavLink>
                            {CATEGORIES.map(category => (
                                <li key={category} style={{listStyleType: "none"}}>
                                    <NavLink to={'/quotes/' + category}>{category}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col xs={9}>
                        {Object.keys(this.state.quotes).map(quote => (
                            <Card key={quote} className='position-relative m-3'>
                                <CardBody>
                                    <CardText
                                        style={{paddingRight: '100px'}}>"{this.state.quotes[quote].text}"</CardText>
                                    <CardTitle
                                        className='font-italic'
                                        style={{fontSize: '20px'}}>-{this.state.quotes[quote].author}</CardTitle>
                                    <div className='position-absolute' style={{top: '20px', right: '20px'}}>
                                        <Button tag={Link} to={'/quotes/' + quote + '/edit'}
                                                style={{fontWeight: 'bold', borderColor: '#000'}}
                                                color="muted">Edit</Button>
                                        <Button style={{fontWeight: 'bold', marginLeft: '10px', borderColor: '#000'}}
                                                color="muted"
                                                onClick={event => this.deleteQuote(event, quote)}
                                        >X</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Main;