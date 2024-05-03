import '../style/portfolioCSS.css';
import {useParams} from "react-router-dom";
import Header from "../elementPage/Header";
import Footer from "../elementPage/Footer";
import {useState} from "react";
import TagStyle from "../elementPage/TagStyle";
import PostComment from "../elementPage/PostComment";

function BlogPost({text, setText}) {
    let tag
    let comment
    const { id } = useParams()
    const [Post, setPost] = useState([])
    const [Comments, setComments] = useState([])
    if(Post.length===0) {
        fetch('https://dummyjson.com/posts/'+id)
            .then(response => response.json())
            .then(result => {
                // listPost = result
                setPost(result)
            })
            .catch(error => {
                console.log(error)
            });
    }
    if(Post.length!==0) {
        tag = Post.tags.map((tag) => {
            return(<TagStyle tag={tag}/>)
        })
    }

    if(Comments.length===0) {
        fetch('https://dummyjson.com/posts/'+id+'/comments')
            .then(response => response.json())
            .then(result => {
                // listPost = result
                setComments(result)
                console.log(Comments)
            })
            .catch(error => {
                console.log(error)
            });
    }
    if(Comments.length!==0) {

        comment = Comments.comments.map((comment) => {
            return(<PostComment comment={comment}/>)
        })
    }


    return (
        <>
            <Header text={text} setText={setText}/>
                <div className="body">
                    <div className="longCard">
                        <h2>{Post.title}</h2>
                        <p>{Post.body}</p>
                        <div>
                            <img className="likeIcon" src="/iconLike.png" alt="Like :"/>
                            <span>{Post.reactions}</span>
                            <div id="tag" className="tagGroup">
                                <span>Tag : </span>
                                {tag}
                            </div>
                        </div>
                        <div className="div_cardButton">
                            <button className="cardButton">Modifier le post</button>
                            <button className="cardButton">Supprimer le post</button>
                        </div>
                    </div>
                    {comment}
                </div>
            <Footer/>
        </>
    );
}

export default BlogPost;
