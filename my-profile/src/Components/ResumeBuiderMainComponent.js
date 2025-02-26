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
                    <h5 className='title-header'>{skillData.header}</h5>
                    <br/>
                    {skillData?.skills.map((skill, index) => (<li className='badge rounded-pill skill-text' key={index}>{skill}</li>))}
                </div>
                <br />
                <br />
                <div>
                    <h5 className='title-header'>{softSkillData.header}</h5>
                    <br/>
                    {softSkillData?.skills.map((skill, index) => (<li className='badge rounded-pill skill-text' key={index}>{skill}</li>))}
                </div>
                <br />
                <br />
                <div>
                    <h5 className='title-header'>{educationalDetails.title}</h5>
                  <br/>
                    <p className='edu-data'><i>{educationalDetails.study}</i></p>
                    <p className='edu-data'><i>{educationalDetails.university}</i></p>
                    <p className='edu-data'><i>{educationalDetails.year}</i></p>
                </div>
                <br />
                <br />
                <div>
                    <h5 className='title-header'>{achievements?.header}</h5>
                    {achievements?.awards.map((skill, index) => (<li className='badge rounded-pill skill-text' key={index}>{skill}</li>))}
                </div>




            </div>
            {/* experience section */}
            <div className='col-8'>
                <h5 className='title-header'>{experienceData?.header}</h5>
                {experienceData?.Details?.map((details, index) => (<div key={index} >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <h5 className='role' >{details?.role}</h5>
                           
                        </div>
                        <div className='role px-1'>{details?.year}</div>
                    </div>
                    <div className='role'>{details?.company} | Hyderabad </div>
                    <ul>
                        {details?.responsibilities?.map((resp, key) => (<li key={key} className='responsibilities' >{resp}</li>))}
                    </ul>
                    <p className='projects' >Projects</p>
                    <div class="d-flex flex-row bd-highlight mb-3">

                        {details?.projects?.map((project, pkey) => (<div key={pkey} className=" responsibilities p-2 bd-highlight  project-border">{project}</div>))}
                       
                    </div>
                    
                </div>))}

            </div>
        </div>
    </div>)
}
export default ResumeBuilderMainComponent;