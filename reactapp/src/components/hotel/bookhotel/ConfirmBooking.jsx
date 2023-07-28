import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import axios from 'axios';
import swal from 'sweetalert';
import * as yup from 'yup';
import { RazorPay } from '../HotelConstant';
import ErrorPage from '../../../containers/ErrorPage';
import PageNotFound from '../../../containers/PageNotFound';

function payment(order,bookingId,navigate) {
    if (order.status) {
        let options = {
            "key": RazorPay.key,
            "amount": order.amount,
            "currency": "INR",
            "name": "Travel.com",
            "description": "Payement for hotel booking",
            "image": "https://pixabay.com/vectors/icon-summer-beach-sunset-5577198/",
            "order_id": order.id,
            "handler": function (response) {

                console.log(response)

                updatePaymentOnServer(response.razorpay_payment_id, response.razorpay_order_id, "paid");
            },
            "prefill": {
                "name": "customer name",
                "email": "",
                "contact": "",
            },
            "notes": {
                "bookingId": bookingId,
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        let rzp = new window.Razorpay(options)
        rzp.on('payment.failed', function (response) {
            console.error(response.error.code);
            console.error(response.error.description);
            console.error(response.error.source);
            console.error(response.error.step);
            console.error(response.error.reason);
            console.error(response.error.metadata.order_id);
            console.error(response.error.metadata.payment_id);
            swal("Opps!!", "Payment Failed", "error")
        })

        rzp.open();
    }
    else {
        swal("Failed!!", "Order Creating Failed, Please Try Again", "error");
        return;
    }

    const updatePaymentOnServer = (razorpay_payment_id, order_id, status) => {
        const data = {
            paymentId: razorpay_payment_id,
            orderId: order_id,
            status: status
        }
        axios.post(`/booking/register-payment/bookingId?bookingId=${bookingId}`, data)
            .then(response => {
                toast.success('Paid Successfully, Your Booking Has Completed. You can check your booking in you profile', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                navigate("/search-hotel");
            }).catch(e => {
                console.log(e.response.data)
                toast.error('Payment Sucessful, but we failed to capture it, we will contact as soon as possible', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate("/search-hotel")
            })
    };

}

function ConfirmBooking() {
    let { bookingId } = useParams();
    const { state } = useLocation();
    const [error, setError] = useState(false);
    const [booking, setBooking] = useState({})
    const title = useRef('Confirmation Page | Travel.com')
    const navigate = useNavigate();

    const schema = yup.object().shape({
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });

    useEffect(() => {
        fetchData();
        document.title = title.current;

        return () => {
            document.title = 'Travel.com';
        };
    }, []);

    const fetchData = () => {
        axios
            .get(`/booking/hotel/bookingId?bookingId=${bookingId}`)
            .then(res => {
                setBooking(res.data);
            })
            .catch(e => {
                setError(e.response.data);
            });
    };
    
    const handleSubmit = (value) => {
        if (value.terms) {
            axios.post(`/booking/payment/bookingId?bookingId=${bookingId}`, { amount: booking.totalAmount })
                .then(response => {
                    const order = response.data;
                    payment(order, bookingId,navigate);
                }).catch(e => {
                    console.log(e);
                    return;
                })
        } else {
            swal("Opps!!", "Accept terms and condition", "waring");
            return;
        }
    };

    const handleDiscard = (event) => {
        event.preventDefault();
        const confirmation = window.confirm('Are you sure you want to discard this booking');
        if (confirmation) {
            axios.delete(`/booking/hotel/bookingId?bookingId=${bookingId}`).then(response => {
                console.log(response)
                toast.info('Booking Discarded Succesfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate('/search-hotel');
            }).catch(e => {
                setError(e.response.data)
            })
        }

    }

    if (state === null || !state.valid) {
        return (<PageNotFound />)
    } else {
        return (
            error.message ? <ErrorPage error={error} /> :
                <div className='h-full w-full flex justify-center'>
                    <div className='px-3 py-2 mt-4 rounded-xl shadow'>
                        <Formik
                            validationSchema={schema}
                            onSubmit={handleSubmit}
                            initialValues={{
                                hotel: `${booking.hotelName}, ${booking.city}, ${booking.country}`,
                                guestName: booking.guestName,
                                checkInDate: booking.checkInDate,
                                checkOutDate: booking.checkOutDate,
                                idType: booking.idType,
                                idNumber: booking.idNumber,
                                totalRooms: booking.totalRooms,
                                totalTravellers: booking.totalTravellers,
                                totalAmount: booking.totalAmount,
                                terms: false,

                            }}
                            enableReinitialize={true}
                        >
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form noValidate onSubmit={handleSubmit} className='flex flex-col'>
                                    <h5 className=''> Confirm Booking Details</h5>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Hotel</Form.Label>
                                        <Form.Control
                                            className='capitalize'
                                            type="text"
                                            name="hotel"
                                            value={values.hotel || ''}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Guest Name</Form.Label>
                                        <Form.Control
                                            className='capitalize'
                                            type="text"
                                            name="guestName"
                                            value={values.guestName || ''}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className='w-1/2'>
                                            <Form.Label>Check-In Date</Form.Label>
                                            <Form.Control
                                                className='capitalize'
                                                type="text"
                                                name="checkInDate"
                                                value={values.checkInDate || ''}
                                                disabled={true}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} className='w-1/2'>
                                            <Form.Label>Check-Out Date</Form.Label>
                                            <Form.Control
                                                className='capitalize'
                                                type="text"
                                                name="checkOutDate"
                                                value={values.checkOutDate || ''}
                                                disabled={true}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className='w-1/2'>
                                            <Form.Label>Identification Document</Form.Label>
                                            <Form.Control
                                                className='capitalize'
                                                type="text"
                                                name="idType"
                                                value={values.idType || ''}
                                                disabled={true}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} className='w-1/2'>
                                            <Form.Label>{values.idType || ''} Number</Form.Label>
                                            <Form.Control
                                                className='capitalize'
                                                type="text"
                                                name="idNumber"
                                                value={values.idNumber || ''}
                                                disabled={true}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} className='w-1/2'>
                                            <Form.Label>Total Number of Rooms</Form.Label>
                                            <Form.Control
                                                className='capitalize'
                                                type="text"
                                                name="idType"
                                                value={values.totalRooms || ''}
                                                disabled={true}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} className='w-1/2'>
                                            <Form.Label>Total Number of Guests</Form.Label>
                                            <Form.Control
                                                className='capitalize'
                                                type="text"
                                                name="idNumber"
                                                value={values.totalTravellers || ''}
                                                disabled={true}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group as={Col} className="mb-3">
                                        <Form.Label>Total Amount</Form.Label>
                                        <Form.Control
                                            className='capitalize'
                                            type="text"
                                            name="totalAmount"
                                            value={values.totalAmount || ''}
                                            disabled={true}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            required
                                            name="terms"
                                            label="Agree to terms and conditions"
                                            onChange={handleChange}
                                            isInvalid={!!errors.terms}
                                            feedback={errors.terms}
                                            feedbackType="invalid"
                                        />
                                    </Form.Group>
                                    <div className='w-full flex justify-between items-center'>
                                        <Button variant="danger" type="btn" onClick={handleDiscard}>Discard Booking</Button>
                                        <Button disabled={booking?.bookingStatus === 'confirmed' ? true : false ?? false} variant="success" type="submit">Procced To Pay</Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
        );
    }
}

export default ConfirmBooking;