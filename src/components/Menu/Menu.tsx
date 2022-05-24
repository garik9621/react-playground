import './Menu.css'
import { Link } from 'react-router-dom';

type MenuProps = {}

export const Menu: React.FC<MenuProps> = (props) => {
    const menu = [
        {
            link: '/',
            label: 'Home'
        },
        {
            link: '/game',
            label: 'Game'
        },
        {
            link: '/about',
            label: 'About me'
        }
    ];

    return (
        <nav className="Menu">
            {menu.map((item, index) => <Link to={item.link} key={index} className="Menu-item">{item.label}</Link>)}
        </nav>
    )
}