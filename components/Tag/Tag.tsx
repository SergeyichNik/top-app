import React from 'react';
import {TagProps} from './Tag.props';
import styles from './Tag.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Tag = ({children, className, link, color = 'ghost', sizeType = 'medium', ...props}: TagProps) => {

    const style = cx(
        styles.main,
        styles[sizeType],
        styles[color],
        className
    );

    return (
        <div className={style} {...props}>
            {link ? (
                <a href={link}>{children}</a>
            ) : (
                <>{children}</>
            )}
        </div>
    );
};

export default Tag;