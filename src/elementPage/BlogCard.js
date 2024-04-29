import '../style/portfolioCSS.css';

function BlogCard({titre, body, userID}) {


    return (
        <>
            <div className="card">
                <section className="cardText">
                    <h3>{titre}</h3>
                    <p>
                        {body}
                    </p>
                </section>
                <section className="cardUser">
                    <div className="cardUserImage">
                        <img className="userImage" src="/profil.jpg" alt="profilPicture"/>
                    </div>
                    <div className="cardUserInfo">
                        <span>User {userID}</span>
                    </div>
                </section>
            </div>
        </>
    );
}

export default BlogCard;