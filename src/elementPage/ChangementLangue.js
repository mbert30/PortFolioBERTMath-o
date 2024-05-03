import '../style/portfolioCSS.css';
import ApiTraduction from "../Controller/apiTraduction";

function ChangementLangue({text, setText}) {
    function setLangue(langue) {
        if(langue === "FR") {
            setText(ApiTraduction.getTrad("FR"))
            console.log(text)
        } else {
            setText(ApiTraduction.getTrad("EN"))
            console.log(text)
        }
    }

    return (
        <>
            <div className="div_langue">
                <button className='button_flag' onClick={() => setLangue("FR")}><img className='img_flag' src='/FR.png' alt="FR"></img></button>
                <button className='button_flag' onClick={() => setLangue("EN")}><img className='img_flag' src='/EN.png' alt="EN"></img></button>
            </div>
        </>
    );
}

export default ChangementLangue;