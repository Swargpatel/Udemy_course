import axios from 'axios';
import React,{ useEffect, useState } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/posts'
const Posts = () => {
const [Posts , setPosts] = useState([])
const [Loading , setLoading] = useState(true)
const [Error , setError] = useState(null)
    useEffect(() => {
        
        axios.get(URL).then((post) => {

            setLoading(false)
            setPosts(post.data);

        }).catch((err)=>{

            setError(err)
            setLoading(false);

        })
        
    },[]);

    //Display Loading 
    if(Loading) return <h2 style={{color: "green", textAlign: "center"}}>Loading.....</h2>
    //Display Error
    if(Error) return <h2 style={{color: 'red', textAlign: "center"}}>{Error.message}</h2>

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Posts</h2>
            <div>
                {Posts.map((postdata)=>{
                    return (
                        <div key={postdata.id}>
                            <h2>{postdata.title}</h2>
                            <p>{postdata.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Posts
