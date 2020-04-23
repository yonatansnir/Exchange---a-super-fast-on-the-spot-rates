import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navigationItem.module.css';

const NavigationItem = (props) => (
    <li className={styles.navigationItem}>
        <NavLink to={props.link} exact={props.exact}>
            {props.children}
        </NavLink>
    </li>
)


export default NavigationItem;