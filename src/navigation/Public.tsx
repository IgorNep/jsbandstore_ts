import React from 'react';
import { Redirect, Route } from 'react-router';
import LoginContainer from '../containers/LoginContainer';

const Public = () => {
  return (
    <>
      <Route path='/login' component={LoginContainer} />
      <Redirect to='/login' />
    </>
  );
};

export default Public;
