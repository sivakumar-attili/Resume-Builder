import React from "react";
import { achievements } from "../consts";

export default function Achievements() {
    return (<div>
        <div className=' profile-summary' >
            <h3><u>{achievements.header}:</u></h3>
            <ul className='Achievements' >
                {achievements.awards.map((award, index) => (<li key={index} className=' m-2 award-item ' >{award}</li>))}
            </ul>
        </div>
    </div>)
}