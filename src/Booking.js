import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
function Booking() {
    const [info, setinfo] = useState({});
    useEffect(() => {
        var information = JSON.parse(localStorage.getItem('Store'));
        console.log(information)
        setinfo(information);
    }, [])
    return (
        <div className="booking">
            {(info !== null) ?
                <div className="parent">
                    <div className="left">
                        <img src={info.pic} alt="pic" />
                    </div>
                    <div className="right">
                        <div className="formdiv">
                            <span className="topic">Movie Name: </span>
                            <span className="value">{info.name}</span>
                        </div>
                        <div className="formdiv">
                            <span className="topic">Movie Language:  </span>
                            <span className="value">{info.language} </span>
                        </div>
                        <div className="formdiv">
                            <span className="topic">Name: </span>
                            <span className="value">{info.person} </span>
                        </div>
                        <div className="formdiv">
                            <span className="topic">Time: </span>
                            <span className="value">{info.time} </span>

                        </div>
                        <div className="formdiv">
                            <span className="topic">No of Seats: </span>
                            <span className="value">{info.seat} </span>
                        </div>
                        <div className="formdiv">
                            <span className="topic">Type Of Seats: </span>
                            <span className="value">{info.type} </span>
                        </div>
                        <Link to="/">
                            <button className="btn" style={{marginTop:"20px",marginLeft:"350px"}}>
                                <FontAwesomeIcon icon={faHome} size="lg" style={{ marginRight: "10px" }} />
                                {"Home"}
                            </button>
                        </Link>
                    </div>
                </div>
                : ""}
        </div>
    )
}

export default Booking
