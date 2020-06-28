import React, { Component } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

class AddPost extends Component {
    state = {
        posts: {
            id: uuidv4(),
            title: "",
            post: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            posts: {
                ...this.state.posts,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state.posts)
        this.setState({
            posts: {
                title: "",
                post: ""
            }
        })
    }

    render() {
        return (
            <>
                <div className="card p-5 mx-auto" style={{ width: "650px" }}>
                    <form onSubmit={this.handleSubmit} className="py-2 mt-2">
                        <div className="form-group">
                            <label htmlFor="post-title">Post Title</label>
                            <input type="text" name="title" className="form-control" id="post-title" value={this.state.posts.title} onChange={this.handleChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="post-post">Post Content</label>
                            <textarea className="form-control" name="post" id="post-post" rows="3" value={this.state.posts.post} onChange={this.handleChange}></textarea>
                        </div>
                        <button className="btn btn-block btn-primary mb-1">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {
            dispatch({ type: "ADD_POST", post })
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPost);
