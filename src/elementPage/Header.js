import '../style/portfolioCSS.css';
import NavBar from "./NavBar";

function Header({text, setText}) {
    return (
        <>
            <header>
                <NavBar text={text} setText={setText}/>
            </header>
        </>
    );
}

export default Header;