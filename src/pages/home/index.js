import React, {PureComponent} from 'react';
import styles from './index.css';
import pic from 'images/a.jpg';

export default class Home extends PureComponent {
    render() {
        return (
            <div className={styles.wrapper}>
                this is home~
                <img src={pic}/>
            </div>
        )
    }
}