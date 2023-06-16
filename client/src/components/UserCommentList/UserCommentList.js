import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function UserCommentList({ comments }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button type="submit" className='disBtn' onClick={handleShow}>See Comments</button>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>This discussion has these comments so far:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='commentOrder'>
                        {comments.map((item, i) => (
                            < div key={i} className='card eachComment'>
                                <div className='card-body'>
                                    <p>{item.commentText}</p>
                                    <p>by: {item.commentAuthor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}