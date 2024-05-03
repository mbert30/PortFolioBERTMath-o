import '../style/portfolioCSS.css';
import {useEffect, useState} from "react";
import DarkMode from "./DarkMode";
import ChangementLangue from "./ChangementLangue";

function NavBar({text, setText}) {

    const [navbarColor, setNavbarColor] = useState('solid');
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarColor('transparent');
            } else {
                setNavbarColor('solid');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <nav className={`navbar ${navbarColor}`}>
                <a href="/"><img className="nav_logo" src="/logo.webp" alt={'Logo'}></img></a>
                <div className="navbar_liste">
                    <div className="navbar_pages">
                        <a href="/">{text.navBar1}</a>
                        <a href="/MonParcour">{text.navBar2}</a>
                        <a href="/MesExperiences">{text.navBar3}</a>
                        <a href="/contact">{text.navBar4}</a>
                        <a href="/blog">{text.navBar5}</a>
                    </div>
                    <div className="navbar_button">
                        <DarkMode/>
                        <ChangementLangue text={text} setText={setText}/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;