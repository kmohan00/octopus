import React, { useState, useEffect } from 'react';
import button from 'react';
import livestill from './octopus.png';

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
                <div>
                    <p className='name'>
                        Food
                    </p>
                    <div className='elem'>
                        <div className='info'>
                            <p>
                                Last Fed:
                            </p>
                            <p>
                                placeholder
                            </p>
                        </div>
                        <p>
                            Food:
                        </p>
                        <p>
                            Next Feeding:
                        </p>
                        <button>
                            Log Entry
                        </button>
                    </div>
                </div>
                <div>
                    <p className='name'>
                        Weight
                    </p>
                    <div className='elem'>
                        <div className='info'>
                            <p>
                                Last Weighed:
                            </p>
                            <p>
                                placeholder
                            </p>
                        </div>
                        <p>
                            Total Weight:
                        </p>
                        <p>
                            Next Weighing:
                        </p>
                        <button>
                            Log Entry
                        </button>
                    </div>
                </div>
                <div>
                    <p className='name'>
                        Activity
                    </p>
                    <div className='elem'>
                        <div className='info'>
                            <p>
                                *Chart will need to go here
                            </p>
                            <p>
                                placeholder
                            </p>
                        </div>
                        <p>
                            Current Activity: 
                        </p>
                        <button>
                            Log Entry
                        </button>
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