import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { userInfoSelector } from '../bus/userLogin/userLoginSelectors';
import NavbarContainer from '../containers/NavbarContainer';

import Private from './Private';
import Public from './Public';

const App = () => {
  const userInfo = useSelector(userInfoSelector);

  return (
    <Router>
      <NavbarContainer />
      {userInfo ? <Private /> : <Public />}
    </Router>
  );
};

export default App;
