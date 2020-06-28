const initialState = {
    posts: [{
            id: 1,
            title: 'First Post',
            post: 'This is react redux experiment'
        },
        {
            id: 2,
            title: 'Second Post',
            post: 'This is react redux experiment'
        },
        {
            id: 3,
            title: 'Third Post',
            post: 'This is react redux experiment'
        }
    ]
}
const postReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_POST':
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                posts: newPost
            }
            case 'ADD_POST':
                return {
                    posts: [...state.posts, action.post]
                }
                default:
                    return state;
    }
}

export default postReducers;