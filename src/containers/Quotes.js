import React, {Component} from 'react';
import axiosApi from "../axios-api";
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

class Quotes extends Component {
    state = {
        quotes: []
    };

    async componentDidMount() {
        const response = await axiosApi.get('/quotes.json');
        if (response.data) {
            this.setState({quotes: response.data});
        }
    }

    deleteQuote = () => {
        const id = this.props.match.params.id;
        axiosApi.delete('/quotes/' + id + '.json');
        this.props.history.replace('/');
    };

    render() {
        return (
            <div className='pt-3'>
                {Object.keys(this.state.quotes).map(quote => (
                    <Card key={quote} className='position-relative m-3'>
                        <CardBody>
                            <CardText style={{paddingRight: '100px'}}>"{this.state.quotes[quote].text}"</CardText>
                            <CardTitle
                                className='font-italic'
                                style={{fontSize: '20px'}}>-{this.state.quotes[quote].author}</CardTitle>
                            <div className='position-absolute' style={{top: '20px', right: '20px'}}>
                                <Button tag={Link} to={'/quotes/' + quote + '/edit'}
                                        style={{fontWeight: 'bold', borderColor: '#000'}}
                                        color="muted">Edit</Button>
                                <Button style={{fontWeight: 'bold', marginLeft: '10px', borderColor: '#000'}}
                                        color="muted"
                                        onClick={this.deleteQuote}
                                >X</Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        );
    }
}

export default Quotes;