import React from 'react';

export default function DiscussionList({ discussionList }) {

    // console.log(users.username);
    if (!discussionList) {
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

        <div className='cardSize'>
            {discussionList.map((item, i) => (
                <div className="card" key={i}>
                    <h5 className="discussion">{item.discussionAuthor}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{item.discussionText}</h5>
                        <p className="card-text">{item.createdAt}</p>
                        <button type="submit" className='disBtn'>Show support</button>
                    </div>
                </div>
            ))}
        </div>

    )
}

// !PREVIOUS CODE
// import React from 'react';

// export default function DiscussionList({ user }) {

//     // console.log(users.username);
//     if (!user) {
//         return (
//             <div>
//                 <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
//                     <div className="toast-body">
//                         No Discussions yet!
//                         <div className="mt-2 pt-2 border-top">
//                             <button type="button" className="btn btn-primary btn-sm" to='/'>Go Back to Homepage</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }


// return (

    // <div>
    // {
    //     user.map((discussion, i) => (
    //         <div className="card w-75" key={i}>
    //             <div className='card-header'>{discussion.username}</div>
    //             {discussion.discussions.map((item, j) => (
    //                 <div className="card-body" key={j}>
    //                     <h5 className="card-title">{item.discussionText}</h5>
    //                     <p className="card-text">By {item.discussionAuthor} at {item.createdAt}</p>
    //                     <a href="" className="btn btn-primary">Start Discussion</a>
    //                 </div>
    //             ))}
    //         </div>
    //     ))
    // }
    // </div>

// ) 
// }

