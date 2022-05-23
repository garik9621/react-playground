import React from "react";
import './Header.css';
import {Logo} from '../Logo/Logo';
import { Menu } from "../Menu/Menu";

export const Header: React.FC = () => {
    return (
        <header className="Header pb-5">
            <div className="container">
                <div className="row justify-content-between flex-nowrap align-items-center">
                    <div className="col">
                        <Logo alt={'Logo'} src={'https://www.clipartmax.com/png/middle/475-4750172_recent-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B5%D0%B4%D0%B8%D0%BD%D0%BE%D1%80%D0%BE%D0%B3.png'} />
                    </div>
                    <div className="col col-auto">
                        <Menu />
                    </div>
                </div>
            </div>
            
        </header>
    );
}