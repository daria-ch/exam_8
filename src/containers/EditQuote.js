import React, {Component} from 'react';
import axiosApi from "../axios-api";
import QuoteForm from "../components/UI/QuoteForm/QuoteForm";
import Spinner from "../components/UI/Spinner/Spinner";

class EditQuote extends Component {
    state = {
        category: '',
        author: '',
        text: '',
        loading: false
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await axiosApi.get('/quotes/' + id + '.json');
        this.setState({category: response.data.category, author: response.data.author, text: response.data.text});
    }

    inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

    formSubmitHandler = async (e) => {
        e.preventDefault();

        this.setState({loading: true});

        const editedQuote = {
            category: this.state.category,
            author: this.state.author,
            text: this.state.text
        };
        this.setState({author: '', text: ''});

        const id = this.props.match.params.id;
        await axiosApi.put('/quotes/' + id + '.json', editedQuote);
        this.props.history.push('/');
    };

    render() {
        let form = (
            <QuoteForm
                formOnSubmit={this.formSubmitHandler}
                authorValue={this.state.author}
                authorOnChange={this.inputChangeHandler}
                textValue={this.state.text}
                textOnChange={this.inputChangeHandler}
            />
        );
        if (this.state.loading) {
            form = <Spinner/>
        }

        return (
            <div>
                <h1>Edit a quote</h1>
                {form}
            </div>
        );
    }
}

export default EditQuote;
