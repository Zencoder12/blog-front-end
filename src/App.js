import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Posts from "./components/Posts";
import RegistrationForm from "./components/RegistrationForm";
import PostPage from "./components/PostPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/home" component={Posts} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/post/:slug" component={PostPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
