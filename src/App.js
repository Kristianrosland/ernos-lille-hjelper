import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import Algorithms from "./algorithms/Algorithms";

import * as firebase from "firebase/app";
import config from "./firebase.config";
import "firebase/auth";
firebase.initializeApp(config);
let auth;

export const AuthContext = React.createContext(null);

const App = () => {
  const [authState, setAuthState] = useState({ user: null, isLoading: true });

  /* For å bruke auth i en annen komponent:
        import { AuthContext } from "../App";
        const auth = useContext(AuthContext);  // { user, isLoading }
   */

  useEffect(() => {
    if (!auth) {
      auth = firebase.auth();

      firebase.auth().onAuthStateChanged((user) => {
        setAuthState({ user, isLoading: false });
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={authState}>
      <HashRouter>
        <Route exact path="/" component={Algorithms} />
        <Route path="/algorithms" component={Algorithms} />
      </HashRouter>
    </AuthContext.Provider>
  );
};

export default App;
