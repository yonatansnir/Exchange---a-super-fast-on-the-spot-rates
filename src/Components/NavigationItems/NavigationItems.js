import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './navigationItems.module.css';


const NavigationItems = () => (
    <nav className={styles.nav}>
        <ul className={styles.ul}>
            <NavigationItem link='/' exact>Home</NavigationItem>
            <NavigationItem link='/user'>User Zone</NavigationItem>
            <NavigationItem link='/my-area'>Login/Register</NavigationItem>
        </ul>
    </nav>
)

export default NavigationItems;