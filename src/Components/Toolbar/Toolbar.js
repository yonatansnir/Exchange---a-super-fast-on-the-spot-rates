import React from 'react'; 
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './toolbar.module.css';

const Toolbar = () => (
    <header className={styles.toolbar}>
        <div className={styles.logo}>
            Exchange
        </div>
        <NavigationItems />
    </header>


    )


export default Toolbar;