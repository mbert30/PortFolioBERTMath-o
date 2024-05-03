import '../style/portfolioCSS.css';
import Header from "../elementPage/Header";
import Footer from "../elementPage/Footer";

function Apropos({text, setText}) {

    return (<>
        <Header text={text} setText={setText}/>
        <div className='body'>
            <h1>Lorem ipsum</h1>
            <p>
                Vivamus tincidunt mi id fermentum pharetra. Vivamus vulputate dapibus velit, vitae cursus massa vehicula ut. Vivamus elementum est vitae erat sollicitudin faucibus. Integer fermentum lectus egestas magna ullamcorper, id pellentesque nibh accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh tortor, aliquet ut lacus et, bibendum vehicula sapien. Mauris auctor interdum eleifend. Nunc cursus pharetra eros, a tempus magna imperdiet quis. Nulla cursus facilisis nunc sit amet finibus. Ut ultrices risus et diam pulvinar rutrum. Nulla sed placerat lectus. Nam eget dolor iaculis, egestas ante sed, sodales sem. Sed et lectus sagittis, vulputate arcu et, consequat nulla. Etiam sem ligula, varius eu lorem nec, sodales porta est. Nunc ultrices, augue non venenatis imperdiet, neque massa aliquet nisl, eu suscipit diam libero id urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>


        </div>
        <Footer/>

    </>);
}

export default Apropos;
