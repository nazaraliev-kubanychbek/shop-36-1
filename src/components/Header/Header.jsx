import { categoryStore } from "../../store/store";
import { Link } from "react-router-dom";
import './header.scss';

const Header = () => {
    const categories = categoryStore(s => s.categories);
    // console.log(categories);
    
    return (
        <header className="header">
            <div className="container header-container">
                <h2 className="header-logo">
                    <Link to={'/'}>Shop</Link>
                </h2>

                <nav className="header-nav">
                    <Link to={'/'} className="header-nav-link">home</Link>
                    {
                        categories.map(item => {
                            return <Link
                            key={item}
                                to={`/category/${item}`}
                                className="header-nav-link">{item}</Link>
                        })
                    }
                    <Link to={'/cart'} className="header-nav-link">cart</Link>
                </nav>
            </div>

        </header>
    );
}

export default Header;
