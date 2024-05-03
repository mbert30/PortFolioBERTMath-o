import '../style/portfolioCSS.css';
import Header from "../elementPage/Header";
import Footer from "../elementPage/Footer";

function MonParcour({text, setText}) {

    return (<>
        <Header text={text} setText={setText}/>
        <div className='body'>
            <h1>Lorem ipsum</h1>
            <div className="div_monParcour_list">
                <ul style={{"borderRight":  "solid 1px", "paddingRight": "10px"}}>
                    <li>Congue porttitor velit, quis venenatis neque</li>
                    <li>Vivamus tincidunt mi id fermentum pharetra</li>
                    <li>Maecenas purus ligula, scelerisque in tempus a, viverra consequat quam</li>
                    <li>Integer placerat neque sed magna dignissim volutpat</li>
                </ul>
                <ul>
                    <li>Curabitur vitae enim eu mauris volutpat egestas</li>
                    <li>Donec rhoncus ipsum varius purus suscipit sodales</li>
                    <li>Integer placerat neque sed magna dignissim volutpat</li>
                    <li>Vivamus elementum est vitae erat sollicitudin faucibus</li>
                </ul>
            </div>
        </div>
        <Footer/>

    </>);
}

export default MonParcour;
