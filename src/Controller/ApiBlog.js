export async function getAllPost() {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(result => {
                // listPost = result
                console.log(result.posts)
                return(result.posts)
            })
            .catch(error => {
                console.log(error)
            });

    // return listPost
}

export function getOnePost(nbPost) {
    fetch('https://dummyjson.com/posts/'+nbPost)
        .then(res => res.json())
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error)
        });
}

export function searchPost(search) {
    fetch('https://dummyjson.com/posts/search?q='+search)
        .then(res => res.json())
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error)
        });
}
