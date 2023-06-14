import React from 'react';

export default function DiscussionList({ users }) {

    console.log(users.username);
    if (!users) {
        return (
            <div>
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-body">
                        No Discussions yet!
                        <div className="mt-2 pt-2 border-top">
                            <button type="button" className="btn btn-primary btn-sm" to='/'>Go Back to Homepage</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


return (

    <div>
    {
        users.map((discussion, i) => (
            <div className="card w-75" key={i}>
                <div className='card-header'>{discussion.username}</div>
                {discussion.discussions.map((item, j) => (
                    <div className="card-body" key={j}>
                        <h5 className="card-title">{item.discussionText}</h5>
                        <p className="card-text">By {item.discussionAuthor} at {item.createdAt}</p>
                        <a href="#" className="btn btn-primary">Start Discussion</a>
                    </div>
                ))}
            </div>
        ))
    }
    </div>
) 
}


