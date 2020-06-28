import React from 'react'
import AddPost from './AddPost'
import PostList from './PostList'


const Home = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center my-3">Hello Blog</h1>
            <AddPost />
            <PostList />
        </div>
    )
}

export default Home
