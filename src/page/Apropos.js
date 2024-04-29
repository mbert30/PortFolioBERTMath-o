import '../style/portfolioCSS.css';
import Header from "../elementPage/Header";
import Footer from "../elementPage/Footer";

function Apropos({text, setText}) {

    return (<>
        <Header text={text} setText={setText}/>
        <div className='body'>



        </div>
        <Footer/>

    </>);
}

export default Apropos;
