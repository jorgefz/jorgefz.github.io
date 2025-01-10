import { Link, NavLink } from 'react-router-dom'
import './index.scss'

const Header = () => {
    return (
        <header className='header'>
            <nav className="nav container">
                <div className='nav_name'>Jorge</div>
                <div className="nav_menu">
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <NavLink exact="true" to="/" className="nav_link active-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink exact="true" to="/" className="nav_link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink exact="true" to="/" className="nav_link">
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink exact="true" to="/" className="nav_link">
                                Research
                            </NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink exact="true" to="/" className="nav_link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav_lang">
                    <span>EN</span>
                    <div className="nav_lang_dropdown">
                        <p>EN</p><br></br><p>ES</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header