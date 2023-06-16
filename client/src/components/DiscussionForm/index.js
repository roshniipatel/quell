import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DISCUSSION } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function DiscussionForm() {
    const [discussionText, setDiscussionText] = useState('');
    // const [discussionText, setDiscussionText] = useState({discussionText:'', discussionAuthor:''});
    const [addDiscussion, { error }] = useMutation(ADD_DISCUSSION);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const author=Auth.getProfile().data.username
        try {
            const { data } = await addDiscussion({ variables: { discussionText, discussionAuthor: author} });
            setDiscussionText('');
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'discussionText') {
            setDiscussionText(value);
        }

    }
    const refresh = () => window.location.reload(true)
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Write something...</label>
                    <textarea type="discussion" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="discussionText" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">Start a discussion!</div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={refresh}>Discuss</button>
                {error && (
                    <div className="col-12 my-3 bg-danger text-white p-3">
                        {error.message}
                    </div>
                )}
            </form>
        </div>
    )
}
