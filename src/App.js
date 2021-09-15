import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import PostsContainer from "./components/PostsContainer";
import RegistrationForm from "./components/RegistrationForm";
import PostPage from "./components/PostPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/home" component={PostsContainer} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/postpage" component={PostPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
