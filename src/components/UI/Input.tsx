import React from 'react';

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            // eslint-disable-next-line react/prop-types
            className={`${props.className} pl-4 h-11 border border-solid border-border rounded focus:outline-green`}
        />
    );
});
Input.displayName = 'Input';
export default Input;
