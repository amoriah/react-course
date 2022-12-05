import './Post.css'

function Post({userId, id, title, body}) {
    return (
        <div className="post">
            <h3>{title}</h3>
            <p>{body}</p>
            <small>userId: {userId} </small>
            <small>id: {id}</small>
        </div>
    )
}

export default Post