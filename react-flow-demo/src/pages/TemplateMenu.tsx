import React from 'react';
import 'bulma/css/bulma.css';

const TemplateMenu: React.FC = () => {
    return (
        <nav className="menu">
            <p className="menu-label m-2">General</p>
            <ul className="menu-list">
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
            <p className="menu-label">Templates</p>
            <ul className="menu-list">
                <li>
                    <a href="#template1">Template 1</a>
                </li>
                <li>
                    <a href="#template2">Template 2</a>
                </li>
                <li>
                    <a href="#template3">Template 3</a>
                </li>
            </ul>
        </nav>
    );
};

export default TemplateMenu;