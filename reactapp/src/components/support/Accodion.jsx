import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/support.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQ } from '@fortawesome/free-solid-svg-icons'

const Accodion = ({ question, answer }) => {
    const [show, setShow] = useState(false);

    return (
        <div className='faq'>

            <button className="accordian" onClick={() => setShow(!show)}><FontAwesomeIcon icon={faQ} /> .      {question}
                {show &&
                    <div className="panel"><p>{answer}</p></div>}</button>
        </div>
    )
}

export default Accodion;