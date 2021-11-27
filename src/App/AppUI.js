import React, { useContext } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import { ImageHero } from '../components/ImageHero';
import { Form } from '../pages/Form';
import { Home } from '../pages/Home';
import { Summary } from '../components/Summary';
import { PropertyContext } from '../contexts/PropertyContext';

export const AppUI = () => {
    const {loading} = useContext(PropertyContext);

    return (
        <div className="full-height">
            <Router>
                <ImageHero>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        {!loading && <Route path="/summary" component={Summary}/>}
                        {!loading && <Route path="/form/:step" component={Form}/>}
                    </Switch>
                </ImageHero>
            </Router>
        </div>
    );
}
