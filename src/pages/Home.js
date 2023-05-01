import React, { useState, useEffect } from 'react'

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json));
    }, []);

    return (
        <div className='container'>
            <h1>Ini adalah Home</h1>

            <ul>
                {posts.map((post) => (
                    <li>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home