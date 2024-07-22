import React from 'react';
import { achievements, educationalDetails, headerData, skillData, softSkillData, summaryContent } from './consts';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
function ResumeBuilderMainComponent() {
    return (<div className='container-fluid border'>
        {/* header section */}
        <div className='header-section'>
            <div className='row'>
                <div className='col-8'>
                    <h1>{headerData.name}</h1>
                    <h5>{headerData.title}</h5>
                </div>
                <div className='col-4 contact-section'>
                    <div>
                        <EmailOutlinedIcon />
                        <span> {headerData.email}</span>
                    </div>
                    <div >
                        <AddIcCallOutlinedIcon />
                        <span> {headerData.mobileNum}</span>
                    </div>
                    <div>
                        <LocationOnOutlinedIcon />
                        <span> {headerData.location}</span>
                    </div>

                </div>

            </div>
            {/* <div className='row'>
                <div className='col-4' >
                    <EmailOutlinedIcon />
                    <span> {headerData.email}</span>
                </div>
                <div className='col-4'>
                    <AddIcCallOutlinedIcon />
                    <span> {headerData.mobileNum}</span>
                </div>
                <div className='col-4'>
                    <LocationOnOutlinedIcon />
                    <span> {headerData.location}</span>


                </div>
            </div> */}

        </div>
        {/* summary section */}
        <div className='summary-section'>
            {summaryContent.data}
        </div>
        <hr />
        <div className='row' >
            {/* skill section */}
            <div className='col-4 skill-section'>
                <div>
                    <h6>{skillData.header}</h6>

                    {skillData?.skills.map((skill, index) => (<li className='badge rounded-pill skill-text' key={index}>{skill}</li>))}
                </div>
                <br />
                <div>
                    <h6>{softSkillData.header}</h6>
                    {softSkillData?.skills.map((skill, index) => (<li className='badge rounded-pill skill-text' key={index}>{skill}</li>))}
                </div>
                <br />
                <div>
                    <h6>{educationalDetails.title}</h6>
                    <p>{educationalDetails.study}</p>
                    <p>{educationalDetails.university}</p>
                    <p>{educationalDetails.year}</p>
                </div>
                <br />
                <div>
                    <h6>{achievements?.header}</h6>
                    {achievements?.awards.map((skill, index) => (<li className='badge rounded-pill skill-text' key={index}>{skill}</li>))}
                </div>




            </div>
            {/* experience section */}
            <div className='col-8'></div>
        </div>
    </div>)
}
export default ResumeBuilderMainComponent;