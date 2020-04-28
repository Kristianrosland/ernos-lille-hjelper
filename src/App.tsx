import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Algorithms from './algorithms/Algorithms';
import FirebaseProvider from './components/firebase/FirebaseProvider';
import CubeTimer from './cube-timer/CubeTimer';
import Login from './login/Login';
import Profile from './profile/Profile';
import Register from './register/Register';

const App = () => (
    <FirebaseProvider>
        <HashRouter>
            <Route exact={true} path="/" component={CubeTimer} />
            <Route exact={true} path="/scramble/:scramble" component={CubeTimer} />
            <Route path="/algorithms" component={Algorithms} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
        </HashRouter>
    </FirebaseProvider>
);

export default App;
