import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar'

import styles from './layout.module.css';


class Layout extends Component {
    render() {
        return (
            <>
            {/* <Toolbar /> */}
            <main className={styles.layout}> {this.props.children} </main>
            </>
        )
    }
}


export default Layout;