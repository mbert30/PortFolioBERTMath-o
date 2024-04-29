import '../style/portfolioCSS.css';
import Header from "../elementPage/Header";
import Footer from "../elementPage/Footer";
import {useEffect, useState} from "react";
import BlogCard from "../elementPage/BlogCard";

function Blog({text, setText})  {
    const [listPost, setlistPost] = useState([])
    if(listPost.length===0){
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(result => {
                // listPost = result
                console.log(result.posts)
                setlistPost(result.posts)
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <>

            <Header text={text} setText={setText}/>
            <div className='body'>
                <h1>Mon blog</h1>
                <div id={"listePost"}>

                    <div className="blogCard">
                            {
                                listPost.map(list => {
                                    if(list!==undefined){
                                        console.log(list.title)
                                        return(<>
                                            <BlogCard titre={list.title} body={list.body} userID={list.userID}/>
                                        </>)}
                                    else {return}
                                })
                            }
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Blog;