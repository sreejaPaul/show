import React, { useRef, useState } from 'react';
import './form.css';
import {Link} from 'react-router-dom';

function Form(props) {
    const [time, setSlot] = useState("");
    const [type, setType] = useState("");
    const nameip = useRef(null);
    const seatip = useRef(null);

    const timeBook = (e) => {
        setSlot(e.target.value);
    }
    const seatTypeBook = (e) => {
        setType(e.target.value);
    }
    const pushInfo = () => {
        const info = {
            name: props.movie.mName,
            language: props.movie.mLang,
            person: nameip.current.value,
            time: time,
            seat: seatip.current.value,
            type: type,
            pic : props.movie.mPic,
        }
        localStorage.setItem('Store', JSON.stringify(info));
    }
    return (
        <div className="booking">
            <div className="parent">
                <div className="left">
                    <img src={props.movie.mPic} alt="pic" />
                </div>
                <div className="right">
                    <div className="formdiv">
                        <span className="topic">Movie Name: </span>
                        <span className="value">{props.movie.mName}</span>
                    </div>
                    <div className="formdiv">
                        <span className="topic">Movie Language:  </span>
                        <span className="value">{props.movie.mLang} </span>
                    </div>
                    <div className="formdiv">
                        <span className="topic">Enter Your Name: </span>
                        <input type="text" placeholder="Enter your name" className="value" ref={nameip} />
                    </div>
                    <div className="formdiv" onChange={timeBook}>
                        <span className="topic">Select Time: </span>
                        <span className="value"><input type="radio" id="firstT" name="time" value="9.00 AM" /> 9.00 AM</span>
                        <span className="value"><input type="radio" id="secondT" name="time" value="12.00 PM" /> 12.00 PM</span>
                        <span className="value"><input type="radio" id="thirdT" name="time" value="3.00 PM" />3.00 PM</span>
                        <span className="value"><input type="radio" id="fourthT" name="time" value="7.00 PM" />7.00 PM</span>

                    </div>
                    <div className="formdiv">
                        <span className="topic">Enter No of Seats: </span>
                        <input type="text" placeholder="Enter no of seats" className="value" ref={seatip} />
                    </div>
                    <div className="formdiv" onChange={seatTypeBook}>
                        <span className="topic">Select Type Of Seats: </span>
                        <span className="value"><input type="radio" id="seatF" name="seat" value="Normal (Rs. 210.00)" /> Normal (Rs. 150.00)</span>
                        <span className="value"><input type="radio" id="seatS" name="seat" value="Executive (Rs. 230.00)" /> Executive (Rs. 200.00)</span>
                        <span className="value"><input type="radio" id="seatT" name="seat" value="Premium (Rs. 250.00)" />Premium (Rs. 250.00)</span>
                    </div>
                    <div className="formdiv">
                        <Link to="/booking" >
                            <button className="btn" id="bookbtn" onClick={pushInfo}>Proceed Further</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
