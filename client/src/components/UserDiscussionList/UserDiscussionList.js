import React from 'react';
import UserCommentList from '../UserCommentList/UserCommentList';
import { REMOVE_DISCUSSION } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import '../../assets/css/UserDiscussionList.css';


export default function UserDiscussionList({ discussions }) {

    const [removeDiscussion, { error }] = useMutation(REMOVE_DISCUSSION);
 
    async function handleDelete(id) {
        try {
            console.log(id);
            const { data } = await removeDiscussion({ variables: { discussionId: id } })
             window.location.reload() 
           
        } catch (error) {
            console.error(error)
            console.log(JSON.stringify(error))
        }
    }

    return (
        <div className='cardSizeProfile' >
            {discussions.discussions.map((item, i) => (
                <div className="card w-75" key={i}>
                    <div className="card-body">
                        {/* button to delete discussion */}
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(item._id)}>X</button>
                        {console.log(item._id)}
                        <h5 className="card-title">{item.discussionText}</h5>
                        <p className="card-text">{item.createdAt}</p>
                    </div>
                    <div>
                        <UserCommentList comments={item.comments} />
                    </div>
                </div>
            ))}
        </div>
    )
}
