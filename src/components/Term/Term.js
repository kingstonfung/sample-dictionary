import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Term.css';

const termDefinition = (props) => (
  // <li className={classes.NavigationItem}>
  //   <NavLink
  //     exact={props.exact}
  //     to={props.link}
  //     activeClassName={classes.active}>
  //   {props.children}</NavLink>
  // </li>
  <p>
    {props.defintion}
  </p>
);

export default termDefinition;
