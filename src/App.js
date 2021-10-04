import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Posts from "./components/Posts";
import RegistrationForm from "./components/RegistrationForm";
import PostPage from "./components/PostPage";
import SearchResultsPage from "./components/SearchResultsPage";
import CreatePostForm from "./components/CreatePostForm";
import EditPostForm from "./components/EditPostForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Header />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/home" component={Posts} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/search-results" component={SearchResultsPage} />
        <Route path="/post/:slug" component={PostPage} />
        <Route path="/edit/:id" component={EditPostForm} />
        <Route path="/create" component={CreatePostForm} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
