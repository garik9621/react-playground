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
            {menu.map(i => <Link to={i.link} className="Menu-item">{i.label}</Link>)}
        </nav>
    )
}