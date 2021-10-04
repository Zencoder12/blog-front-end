import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Posts from "./components/Posts";
import RegistrationForm from "./components/RegistrationForm";
import PostPage from "./components/PostPage";
import SearchResultsPage from "./components/SearchResultsPage";
import CreatePostForm from "./components/CreatePostForm";
import EditPostForm from "./components/EditPostForm";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Error500 from "./components/Error500";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer autoClose={3000} />
      <Header />
      <Switch>
        <Route path="/create" component={CreatePostForm} />
        <Route path="/edit/:id" component={EditPostForm} />
        <Route path="/home" component={Posts} />
        <Route path="/error-500" component={Error500} />
        <Route path="/login" component={LoginForm} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/post/:slug" component={PostPage} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/search-results" component={SearchResultsPage} />
        <Route path="/" exact component={Posts} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
