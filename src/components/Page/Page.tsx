import { ReactElement, ReactNode } from 'react';
import './Page.css';

type PageProps = {
    children: ReactNode
}

export const Page: React.FC<PageProps> = (props) => {
    return (
        <div className="Page">
            <div className="container">
            {props.children}
            </div>
        </div>
    );
}