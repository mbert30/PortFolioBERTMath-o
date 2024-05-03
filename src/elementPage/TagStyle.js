import '../style/portfolioCSS.css';

function TagStyle({tag}) {

    return (
        <>
            <div className="tag">
                <span style={{"paddingLeft": "10px"}}>{tag+","}</span>
            </div>
        </>
    );
}

export default TagStyle;