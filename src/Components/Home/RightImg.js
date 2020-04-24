import React from 'react';

const RightImg = ({ styles, date }) => (
    <div className={styles.right}>
        <div className={styles.rightText}> Exchange </div>
        <div className={styles.Date}>
            <p>
                {' '}
                World bank rates <br /> Last update{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}> {date} </span>{' '}
            </p>
        </div>
    </div>
)

export default RightImg;