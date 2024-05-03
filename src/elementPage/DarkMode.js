import '../style/portfolioCSS.css';
import {useState} from "react";

function DarkMode() {

    const changeMode = () => {
        if(document.getElementById('button_darkMode').checked) {
            document.documentElement.classList.add('dark');
            setSource('/DarkModeLogo_Dark.png')
        } else {
            document.documentElement.classList.remove('dark');
            setSource('/DarkModeLogo_Dark.png')
        }
    }
    const [source, setSource] = useState('/DarkModeLogo_Dark.png')

    return (
        <>
            <div className="div_darkMode">
                <img style={{'width': '35px', 'paddingRight': '10px'}} src={source} alt="Dark Mode :"></img>
                <input type="checkbox" onChange={changeMode} className="button_darkMode" id="button_darkMode"/>
                <label htmlFor="button_darkMode"></label>
            </div>
        </>
    );
}

export default DarkMode;