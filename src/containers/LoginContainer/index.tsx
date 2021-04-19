import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { loginUser } from '../../bus/userLogin/userLoginActionCreators';
import {
  errorSelector,
  loadingSelector,
  userInfoSelector,
} from '../../bus/userLogin/userLoginSelectors';
import Button from '../../components/common/Button';

const StyledAlert = styled.span`
  color: red;
`;

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [alert, setAlert] = useState('');
  const userInfo = useSelector(userInfoSelector);
  const loading = useSelector(loadingSelector);
  const history = useHistory();
  const error = useSelector(errorSelector);

  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.length < 3 || username.length > 16) {
      setAlert('Username is invalid');
      return;
    }

    dispatch(loginUser(username));
    setAlert('');
    setUsername('');
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [userInfo, history]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={changeHandler}
        />
        <Button title='submit' />
      </form>
      {alert && <StyledAlert>{alert}</StyledAlert>}
    </>
  );
};

export default LoginContainer;
