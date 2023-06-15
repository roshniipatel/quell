import React from 'react';

export default function UserDiscussionList({ discussions }) {

    console.log({ discussions })

    return (
        <div className='cardSize'>
            {discussions.discussions.map((item, i) => (
                    <div className="card w-75" key={i}>
                        <div className="card-body">
                            <h5 className="card-title">{item.discussionText}</h5>
                            <p className="card-text">{item.createdAt}</p>
                        </div>
                    </div>
            ))}
        </div>
    )
}