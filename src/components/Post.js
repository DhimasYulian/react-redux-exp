import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
    render() {
        const { post } = this.props;
        return (
            <>
                <div className="col-md-3 mt-2">
                    <div className="card p-3">
                        <h4 className="card-title">{post.title}</h4>
                        <p className="card-subtitle">{post.post}</p>
                        <hr />
                        <button onClick={() => this.props.deletePost(post.id)} className="btn btn-outline-danger mt-2">Delete</button>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({ type: 'DELETE_POST', id })
        }
    }
}

export default connect(null, mapDispatchToProps)(Post)
