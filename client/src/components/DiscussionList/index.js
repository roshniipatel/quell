import React, { useState, useEffect } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import { UPDATE_LIKES } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

export default function DiscussionList({ discussionList }) {
    const [updateLikes] = useMutation(UPDATE_LIKES);
    const [supportCounts, setSupportCounts] = useState(() => {
        const storedCounts = localStorage.getItem('supportCounts');
        return storedCounts ? JSON.parse(storedCounts) : Array(discussionList.length).fill(0);
    });

    const handleShowSupport = (discussionIndex) => {
        setSupportCounts((prevCounts) => {
            const updatedCounts = [...prevCounts];
            updatedCounts[discussionIndex] += 1;
            localStorage.setItem('supportCounts', JSON.stringify(updatedCounts));

            // add to db
            const sendToDb = async () => {
                const discussionId = discussionList[discussionIndex]._id;
                const newLikes = updatedCounts[discussionIndex];
                try {
                    return await updateLikes({ variables: { updateLikesId: discussionId, likes: newLikes } });
                } catch (err) {
                    console.log(JSON.stringify(err));
                }
            }

            sendToDb();

            return updatedCounts;
        });
    };

    useEffect(() => {
        const storedCounts = localStorage.getItem('supportCounts');
        if (storedCounts) {
            setSupportCounts(JSON.parse(storedCounts));
        }
    }, []);

    if (!discussionList) {
        return (
            <div>
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-body">
                        No Discussions yet!
                        <div className="mt-2 pt-2 border-top">
                            <button type="button" className="btn btn-primary btn-sm" to="/">
                                Go Back to Homepage
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cardSize">
            {discussionList.map((item, i) => (
                <div className="card" key={i}>
                    <h5 className="discussion">{item.discussionAuthor}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{item.discussionText}</h5>
                        <p className="card-text">{item.createdAt}</p>
                        {/* <button type="submit" className='disBtn'>Show support</button> */}
                        <CommentForm discussionId={item._id} />

                        <button
                            type="submit"
                            className='disBtn'
                            onClick={() => handleShowSupport(i)}
                        >
                            Show support {supportCounts[i]}
                        </button>

                    </div>


                    <div className='card comments'>
                        {/* I might need another map inside this map to retrieve comments for each user */}

                        {item.comments.map((comment, j) => (
                            < div key={j} className='card eachComment'>
                                <div className='card-body'>
                                    <p>{comment.commentText}</p>
                                    <p>by: {comment.commentAuthor}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            ))
            }
        </div >
    )
}






// export default function DiscussionList({ discussionList }) {
//     const [updateLikes] = useMutation(UPDATE_LIKES);

//     const [supportCounts, setSupportCounts] = useState(() => {
//         const storedCounts = localStorage.getItem('supportCounts');
//         return storedCounts ? JSON.parse(storedCounts) : Array(discussionList.length).fill(0);
//     });

//     const handleShowSupport = (discussionIndex) => {
//         setSupportCounts((prevCounts) => {
//             const updatedCounts = [...prevCounts];
//             updatedCounts[discussionIndex] += 1;
//             localStorage.setItem('supportCounts', JSON.stringify(updatedCounts));

//             var id = discussionList[discussionIndex]._id;
//             var updatedLikes = updatedCounts[discussionIndex];

//             console.log('test');
//             // Insert into database
//             // try {
//             //     const data = await updateLikes({ variables: {id, updatedLikes}});
//             //     console.log(data);
//             // } catch (error) {
//             //     console.error(error);
//             // }

//             return updatedCounts;

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

