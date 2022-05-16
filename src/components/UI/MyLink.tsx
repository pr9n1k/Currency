import React from 'react';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

const MyLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    const defaultClass = 'text-base font-bold hover:text-white';
    const activeClass = match ? 'text-white' : 'text-green-light';
    return (
        <Link to={to} {...props} className={`${activeClass} ${props?.className} ${defaultClass} `}>
            {children}
        </Link>
    );
};

export default MyLink;
