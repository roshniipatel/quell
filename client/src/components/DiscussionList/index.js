import React from 'react';

export default function DiscussionList({ discussions, username }) {

    if (!discussions) {
        return (
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-body">
                    No Discussions yet!
                    <div className="mt-2 pt-2 border-top">
                        <button type="button" className="btn btn-primary btn-sm" to='/'>Go Back to Homepage</button>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="col-8">
            <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">

                    <div className="card-header">
                        {username}
                    </div>
                  
                    {discussions.map((discussion)=>(
                    <div className="card" key={discussion._id}>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{discussion.discussionText}</p>
                            <footer className="blockquote-footer">By {discussion.discussionAuthor}<cite title="Source Title">{discussion.createdAt}</cite></footer>
                        </blockquote>
                    </div>
                </div>
                    ))}


            </div>
        </div>
    )
}
