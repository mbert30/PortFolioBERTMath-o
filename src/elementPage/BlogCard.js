import '../style/portfolioCSS.css';

function BlogCard({id, titre, body, userID}) {


    return (
        <>
            <div className="card">
                <a className="a_card" href={"/BlogPost/"+id}>
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
                </a>
            </div>
        </>
    );
}

export default BlogCard;