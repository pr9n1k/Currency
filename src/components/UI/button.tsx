import React, { FC, PropsWithChildren } from 'react';

export enum BaseButtonType {
    submit = 'submit',
    reset = 'reset',
    button = 'button',
}

type ButtonProps = {
    isLoading?: boolean;
    disabled?: boolean;
    type?: BaseButtonType;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
};
const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    onClick,
    className = '',
    disabled,
    isLoading,
    type = BaseButtonType.button,
}) => {
    const _onClick = React.useCallback<React.MouseEventHandler<HTMLButtonElement>>(
        (event) => {
            if (!isLoading) {
                onClick && onClick(event);
            }
        },
        [onClick, isLoading],
    );
    return (
        <button
            onClick={_onClick}
            className={`${className} text-2xl bg-green text-white active:bg-green-press  transition-colors duration-700 hover:bg-green-light disabled:bg-green px-8 py-2 rounded focus:outline-green-press flex disabled:opacity-30 flex justify-center`}
            disabled={disabled || isLoading}
            type={type}
        >
            {!isLoading && children}
        </button>
    );
};

export default Button;
