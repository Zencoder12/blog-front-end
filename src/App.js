import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Posts from "./components/Posts";
import RegistrationForm from "./components/RegistrationForm";
import PostPage from "./components/PostPage";
import SearchResultsPage from "./components/SearchResultsPage";
import ArrowMenuIcon from "./subcomponents/menu/menu_icons/ArrowMenuIcon";
import MinusMenuIcon from "./subcomponents/menu/menu_icons/MinusMenuIcon";
import PlusMenuIcon from "./subcomponents/menu/menu_icons/plusMenuIcon";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ArrowMenuIcon />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/home" component={Posts} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/search-results" component={SearchResultsPage} />
        <Route path="/post/:slug" component={PostPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
