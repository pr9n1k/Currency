import React from 'react';
import Header from './header';
type PageProps = {
    children?: React.ReactNode;
    title?: string;
    description?: string;
};
const Page: React.FC<PageProps> = ({ children, title }) => {
    return (
        <div className="h-screen bg-main-color">
            <Header />
            <div className="">
                <div className="container mt-16 mx-auto bg-white rounded-lg">
                    {title && (
                        <div className="pt-8 pl-14 pb-6 font-bold text-5xl border-b border-border text-body">
                            {title}
                        </div>
                    )}
                    <div className="px-14 pt-10 pb-14">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Page;
