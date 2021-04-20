import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutContainer from '../containers/AboutContainer';
import BooksContainer from '../containers/BooksContainer';
import BookDetailsContainer from '../containers/BooksDetailsContainer';
import CartContainer from '../containers/CartContainer';
import LoginContainer from '../containers/LoginContainer';
import NotFoundContainer from '../containers/NotFoundContainer';

const Private = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={BooksContainer} />
        <Route path='/book/:id' component={BookDetailsContainer} />
        <Route path='/about' component={AboutContainer} />
        <Route path='/cart' component={CartContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='*' component={NotFoundContainer} />
      </Switch>
    </>
  );
};

export default Private;
