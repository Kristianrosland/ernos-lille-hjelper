import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Algorithms from './algorithms/Algorithms';
import CubeTimer from './cube-timer/CubeTimer';
import FirebaseProvider from './firebase/FirebaseProvider';
import Login from './login/Login';
import Register from './register/Register';

const App = () => (
    <FirebaseProvider>
        <HashRouter>
            <Route exact={true} path="/" component={CubeTimer} />
            <Route exact={true} path="/scramble/:scramble" component={CubeTimer} />
            <Route path="/algorithms" component={Algorithms} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </HashRouter>
    </FirebaseProvider>
);

export default App;
