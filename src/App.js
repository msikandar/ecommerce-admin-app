import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedin } from "../src/actions/auth.action";

function App() {
  const state = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  /**
   * it runs before render or return
   */
  useEffect(() => {
    console.log("app useeffect called");
    if (!state.authenticate) {
      dispatch(isLoggedin());
    }
    return () => {
      console.log("unmount");
      dispatch(isLoggedin());
    };
  }, []);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
