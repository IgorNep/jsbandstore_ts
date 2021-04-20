import { NavLink } from 'react-router-dom';

export const authLinks = (
  <>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='/about'>About</NavLink>
    </li>
  </>
);
export const guestLinks = (
  <>
    <li>
      <NavLink to='/login'>Login</NavLink>
    </li>
  </>
);
