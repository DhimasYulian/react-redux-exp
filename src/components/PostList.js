import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'

class PostList extends Component {
    render() {
        const { posts } = this.props
        return (
            <div className="container mt-4">
                <div className="row d-flex justify-content-start">
                    {posts && posts.map(post => (
                        <Post post={post} key={post.id} />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostList);
