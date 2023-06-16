import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ADD_COMMENT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';

export default function CommentForm(discussionId) {
    // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // 

    // Comment
    const [commentText, setCommentText] = useState('');
    const [addComment, { error }] = useMutation(ADD_COMMENT);
    console.log(discussionId.discussionId)
    const loggedIn = Auth.loggedIn();
    const author = Auth.getProfile().data.username;
    const disId=discussionId.discussionId;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addComment({ variables: { discussionId:disId, commentText, commentAuthor: author } })
            console.log('comments: ' + data)
            setCommentText('');
        } catch (error) {
            console.error(error)
            console.log(JSON.stringify(error))
        }
        const refresh = () => { window.location.reload(true) }
        refresh();
    }
    const refresh = () => { window.location.reload(true) }
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'commentText') { setCommentText(value) }
    }

    if (!loggedIn) {
        return (
          <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-body">
              You are not logged in!
              <div className="mt-2 pt-2 border-top">
                <button type="button" className="btn btn-primary btn-sm" to="/login">
                  Login
                </button>
              </div>
            </div>
          </div>
        );
      }
    //   

    return (
        <div>
            <button type="submit" className='disBtn' onClick={handleShow}>Comment</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton onClick={refresh}>
                    <Modal.Title>Write a comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control as="textarea" rows={3} name='commentText' value={commentText} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <button type="submit" className='disBtn' onClick={handleSubmit}>Comment</button>
                    {/* {error && (
                        <div className="col-12 my-3 bg-danger text-white p-3">
                            {error.message}
                        </div>
                    )} */}

                </Modal.Footer>
            </Modal>
        </div>
    );
}

