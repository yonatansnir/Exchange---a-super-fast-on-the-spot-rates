import React from 'react';
import styles from './effect.module.css';

const Effect = (props) => (
    props.show ? <div className={styles.Effect}> {props.children} </div> : null
    )


export default Effect;


