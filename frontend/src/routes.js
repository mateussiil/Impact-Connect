import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import Home from './pages/Home';

const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    profile: '/profile',
    newIncident: '/incidents/new'
}

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={routes.home} exact component={Home}/>
                <Route path={routes.login} exact component={Logon}/>
                <Route path={routes.register} exact component={Register}/>
                <Route path={routes.profile} exact component={Profile}/>
                <Route path={routes.newIncident} exact component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    )
}