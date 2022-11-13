import React from 'react';
import {ButtonProps} from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({appearance, children, className, arrow, ...props}: ButtonProps) => {

    const buttonStyle = cx(
        styles.wrapper,
        styles[appearance],
        className,
    );

    const iconStyle = cx(
        styles.icon,
        arrow && styles[arrow],
    );

    return (
        <button className={buttonStyle} {...props}>
            {children}
            {arrow && (
                <span className={iconStyle}>
                    <ArrowIcon/>
                </span>
            )}
        </button>
    );
};

export default Button;