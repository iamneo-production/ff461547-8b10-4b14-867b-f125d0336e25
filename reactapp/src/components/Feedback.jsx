import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import axios from "axios";
import { toast } from "react-toastify";

function Feedback() {
    const { id, type } = useParams()
    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')
    const navigate = useNavigate();

    //static custumerid till custemer is not added
    const customerId = 1;

    useEffect(() => {
        document.title = 'Feedback Page | Travel.com'
        document.body.style = "background-color: rgb(236 253 245 / 41%)";

        return (() => {
            document.title = 'Travel.com'
            document.body.style = "background-color: #fff ";
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating <= 5) {
            const data = {
                type: "hotel",
                comment: comment,
                rating: rating,
                customerId: customerId,
                foreignKeyId: id

            }

            axios.post('/review', data)
                .then(res => {
                    console.log(res.data)
                    toast.success('Review Added Successfully', {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                    navigate(-1);
                })
                .catch(e => {
                    console.log(e.res.data);
                    swal("Failed!!", "Failed To Add Review, Please Try Again", "error")
                })
        } else {
            swal("Opps!!", "Rating Should from 0.0 to 5.0", "warning")
            return;
        }

    }

    return (
        <>
            <div className='flex justify-center'>
                <div className='px-3 py-2 mt-4 rounded-xl shadow bg-white'>

                    <Form noValidate onSubmit={handleSubmit} className='flex flex-col'>
                        <h5 className=''> Reviews and Rating</h5>
                        <Form.Group className="mb-3" >
                            <Form.Label>Rate {type}</Form.Label>
                            <Form.Control
                                className='capitalize'
                                type="decimal"
                                name="rating"
                                placeholder="0/5.0"
                                onChange={(e) => { setRating(e.target.value) }}
                                value={rating}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 w-96 h-60" >
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                className="h-4/5"
                                name="comment"
                                value={comment}
                                placeholder="Share your experience with us"
                                onChange={(e) => { setComment(e.target.value) }}
                            />
                        </Form.Group>

                        <div className='w-full flex justify-between items-center'>
                            <Button variant="success" type="submit">Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
};

export default Feedback;