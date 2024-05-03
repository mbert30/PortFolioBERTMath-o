import '../style/portfolioCSS.css';

function PostComment({comment}) {

    return (
        <>
            <div className="commentCard">
                <section className="cardText">
                    <p>
                        {comment.body}
                    </p>
                </section>
                <section className="cardUser">
                    <div className="cardUserImage">
                        <img className="userImage" src="/profil.jpg" alt="profilPicture"/>
                    </div>
                    <div className="cardUserInfo">
                        <span>{comment.user.username}</span>
                    </div>
                </section>
            </div>
        </>
    );
}

export default PostComment;