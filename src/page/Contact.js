import '../style/portfolioCSS.css';
import Header from "../elementPage/Header";
import Footer from "../elementPage/Footer";

function Contact({text, setText}) {
    return (
        <>
            <Header text={text} setText={setText}/>
            <div className='body'>
                <div className='formContact'>
                    <h1>Me contacter :</h1>
                    <h3>Me contacter par mail : bert.matheo2521@gmail.com</h3>
                    <h3>Me contacter par téléphone : 06 76 40 41 11</h3>
                    <h3>Me contacter par formulaire : </h3>
                    <label htmlFor='input_nomPrenom'>Nom Prénom<span style={{'color': 'red'}}>*</span></label>
                    <input type='text' id='input_nomPrenom'></input>
                    <label htmlFor='input_demande'>Votre demande<span style={{'color': 'red'}}>*</span></label>
                    <textarea id='input_demande'></textarea>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;