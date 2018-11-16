import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Recipe  from '../containers/recipes';

export class Routes extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Redirect exact from="/" to="recipes" />
                    <Route path="/recipes" component={Recipe}/>
                </div>
            </Router>
        );
    }
}