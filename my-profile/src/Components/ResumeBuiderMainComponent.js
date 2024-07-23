import React from 'react';
import { achievements, educationalDetails, experienceData, headerData, skillData, softSkillData, summaryContent } from './consts';
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
        {/* skills and experice section */}
        <div className='row' >
            {/* skill section */}
            <div className='col-4 skill-section'>

                <div>
                    <h5>{skillData.header}</h5>

                    {skillData?.skills.map((skill, index) => (<li className='badge rounded-pill skill-text' key={index}>{skill}</li>))}
                </div>
                <br />
                <div>
                    <h5>{softSkillData.header}</h5>
                    {softSkillData?.skills.map((skill, index) => (<li className='badge rounded-pill skill-text' key={index}>{skill}</li>))}
                </div>
                <br />
                <div>
                    <h5>{educationalDetails.title}</h5>
                    <p>{educationalDetails.study}</p>
                    <p>{educationalDetails.university}</p>
                    <p>{educationalDetails.year}</p>
                </div>
                <br />
                <div>
                    <h5>{achievements?.header}</h5>
                    {achievements?.awards.map((skill, index) => (<li className='badge rounded-pill skill-text' key={index}>{skill}</li>))}
                </div>




            </div>
            {/* experience section */}
            <div className='col-8'>
                <h5>{experienceData?.header}</h5>
                {experienceData?.Details?.map((details, index) => (<div key={index} >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <h6>{details?.role}</h6>
                            <div>{details?.company} | Hyderabad </div>
                        </div>
                        <div>{details?.year}</div>
                    </div>
                    <ul>
                        {details?.responsibilities?.map((resp, key) => (<li key={key} >{resp}</li>))}
                    </ul>
                    <div class="d-flex flex-row bd-highlight mb-3">
                        {details?.projects?.map((project, pkey) => (<div key={pkey} className="p-2 bd-highlight border">{project}</div>))}

                    </div>
                    
                </div>))}

            </div>
        </div>
    </div>)
}
export default ResumeBuilderMainComponent;