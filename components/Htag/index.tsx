import React from 'react';
import {HTagProps} from "./index.props";
import styles from './style.module.css';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const HTag = ({tag, children}: HTagProps): JSX.Element => {

    return (
        <>
            {{
                h1: <h1 className={cx('h1')}>{children}</h1>,
                h2: <h2 className={cx('h2')}>{children}</h2>,
                h3: <h3 className={cx('h3')}>{children}</h3>,
            }[tag]}
        </>
    );
};

export default HTag;