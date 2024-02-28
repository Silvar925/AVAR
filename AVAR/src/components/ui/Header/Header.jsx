import "./Header.css"

export function Header() {
    return (
        <header>
            <nav>
                <img src="banners/AVAR_logo.png" alt="AVAR_logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="uber">Über uns</a></li>
                    <li><a href="service">Services</a></li>
                    <li><a href="projekte">Projekte</a></li>
                    <li><a href="kontakt">Kontakt</a></li>
                </ul>
                <a href="#" className="btnCallUS">Call US</a>

                <div className="dropdown">
                    <a href="#"><img src="icons/menuBurger.svg" alt="#" className="dropbtn"/></a>
                    <div className="dropdown-content">
                        <a href="/">Home</a>
                        <a href="uber">Über uns</a>
                        <a href="projekte">Projekte</a>
                        <a href="kontakt">Kontakt</a>
                    </div>
                </div>

            </nav>
        </header>
    )
}