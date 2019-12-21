import React, {Fragment} from 'react';
import Navigation from "./components/UI/Navigation/Navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import Main from "./containers/Main";
import NewQuote from "./containers/NewQuote";
import EditQuote from "./containers/EditQuote";
import Quotes from "./containers/Quotes";


function App() {
    return (
        <Fragment>
            <Navigation/>
            <Container>
                <Switch>
                    <Route path='/' exact component={Main}/>
                    <Route path='/quotes/:name' component={Main}/>
                    <Route path='/quotes/:id/edit' component={EditQuote}/>
                    <Route path='/add-quote' component={NewQuote}/>
                    <Route path='/quotes' component={Quotes}/>
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </Container>
        </Fragment>
    );
}

export default App;
