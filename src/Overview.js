import React, { useState, useEffect } from 'react';
import livestill from './octopus.png';
import graphstill from './Sample-Graph.png';
import { Link } from "react-router-dom";

function Overview() {
    const [fedTime, setFedTime] = useState([]);
    const [meal, setMeal] = useState([]);
    const [nextFeedTime, setNextFeedTime] = useState([]);
    const [weight, setWeight] = useState([]);
    const [totalWeight, setTotalWeight] = useState([]);
    const [nextWeight, setNextWeight] = useState([]);
    const [activity, setActivity] = useState([]);
    // setFedTime('12:00');
    // setMeal('Crabs');
    // setNextFeedTime('15:00');
    // setWeight('12:00');
    // setTotalWeight('32 kgs');
    // setNextWeight('18:00');
    // setActivity('Medium');
    return (
        <div className='main'>
            <h1>Overview</h1>
            <div className='row'>
                <div className='section'>
                    <p className='name'>
                        Food
                    </p>
                    <div className='elem'>
                        <div className='info'>
                            <p className='categoryName'>
                                Last Fed:
                            </p>
                            <p>
                                Today, 12 pm
                            </p>
                        </div>
                        <div className='info'>
                            <p className='categoryName'>
                                Food:
                            </p>
                            <p>
                                Crabs (200 gms)
                            </p>
                        </div>
                        <div className='info'>
                            <p className='categoryName'>
                                Next Feeding:
                            </p>
                            <p>
                                Today, 3 pm
                            </p>
                        </div>
                        <button className='logSpace'>
                            Log Entry
                        </button>
                    </div>
                </div>
                <div className='section'>
                    <p className='name'>
                        Weight
                    </p>
                    <div className='elem'>
                        <div className='info'>
                            <p className='categoryName'>
                                Last Weighed:
                            </p>
                            <p>
                                Today, 12 pm
                            </p>
                        </div>
                        <div className='info'>
                            <p className='categoryName'>
                                Total Weight:
                            </p>
                            <p>
                                32 kgs
                            </p>
                        </div>
                        <div className='info'>
                            <p className='categoryName'>
                                Next Weighing:
                            </p>
                            <p>
                                Tomorrow, 12 pm
                            </p>
                        </div>
                        <button className='logSpace'>
                            Log Entry
                        </button>
                    </div>
                </div>
                <div className='section'>
                    <p className='name'>
                        Activity
                    </p>
                    <div className='elem'>
                        <div>
                            <img className='graphimg' src={graphstill}></img>
                        </div>
                        <div className='info'>
                            <p className='categoryName'>
                                Current Activity:
                            </p>
                            <p>
                                Medium
                            </p>
                            <button className='expandBut'>
                                <Link to="/activity">Expand</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='live'>
                <h3>
                    Live Camera
                </h3>
                <img src={livestill}>
                </img>
                {/* <video width="320" height="240" controls> 
                    <source src="./video.mp4" type="video/mp4" /> 
                </video> */}
            </div>
        </div>
        );
  }
  
  export default Overview;