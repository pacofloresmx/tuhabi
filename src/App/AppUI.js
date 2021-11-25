import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import { ImageHero } from '../components/ImageHero';
import { Form } from '../pages/Form';
import { Home } from '../pages/Home';
import { Summary } from '../components/Summary';

export const AppUI = () => {
    return (
        <div className="full-height">
            <Router>
                <ImageHero>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/summary" component={Summary}/>
                        <Route path="/form/:step" component={Form}/>
                    </Switch>
                </ImageHero>
            </Router>
        </div>
    );
}
