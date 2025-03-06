import React from 'react';
import { skillData, softSkillData } from "../consts"
import ExpCarousal from './ExpCarousal';
export default function TabSection() {
    return (
        <div>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">About</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Experience</button>
                    {/* <button className="nav-link" id="nav-skill-tab" data-bs-toggle="tab" data-bs-target="#nav-skills" type="button" role="tab" aria-controls="nav-skills" aria-selected="false">Skills</button> */}
                    <button className="nav-link" id="nav-awards-tab" data-bs-toggle="tab" data-bs-target="#nav-awards" type="button" role="tab" aria-controls="nav-awards" aria-selected="false">Achievements</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                </div>
            </nav>
            <div className="tab-content p-4" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className='profile-summary' >
                    As a passionate and results-driven ReactJS frontend developer with over 6 years of experience, I specialize in creating dynamic, user-centric web applications. My expertise includes crafting highly performant, responsive, and scalable interfaces using React, Redux, and modern JavaScript frameworks. I have a strong understanding of component-based architecture, state management, and optimizing applications for speed and performance.
                        <br />
                        <br />
                        With a focus on clean, maintainable code, I collaborate seamlessly with designers and back-end developers to bring ideas to life. I thrive in agile environments and continuously keep up with the latest industry trends and technologies. Whether working on complex projects or fast-paced startups, I excel in delivering high-quality user experiences while adhering to best practices in frontend development.
                    </div>
                    <div className='col-md-6 profile-summary' >
                            <h3><u>{skillData.header}:</u></h3>
                            <ul className='row ' >
                                {skillData.skills.map((skill, index) => (<li key={index} className='col-6' >{skill}</li>))}
                            </ul>
                        </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"> <div className='mt-2'>
                   <ExpCarousal/>
                </div></div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">contact</div>
                {/*<div className="tab-pane fade" id="nav-skills" role="tabpanel" aria-labelledby="nav-skills">skills</div> */}
                <div className="tab-pane fade" id="nav-awards" role="tabpanel" aria-labelledby="nav-awards">Achievements</div>
            </div>
        </div>
    )
}