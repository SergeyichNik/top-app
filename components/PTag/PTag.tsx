import React from 'react';
import {PTagProps} from './PTag.props';
import styles from './PTag.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PTag = ({children, sizeType = 'small', className, ...props}: PTagProps) => {

    const style = cx(
        styles.main,
        styles[sizeType],
        className,
    );

    return (
        <p className={style} {...props}>{children}</p>
    );
};

export default PTag;