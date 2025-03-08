import React from 'react';
import Video from '../../videos/paperflying.mp4';
import Video2 from '../../videos/socialmedia.mp4';
import Photo from "../../Images/passportsize.jpg";
import TabSection from './TabSection';
export default function Profile() {
    return (<div>

        <video className='profile-video' src={Video2} loop autoPlay muted />
        <div className='profile-content' >
            <div className='row' >
                <div className='col-md-4 my-auto ' >
                    <div className='content-center' > <img src={Photo} className='profile-photo' /></div>
                    <div className='content-center' >
                        <div>
                            <h1>Sivakumar Attili</h1>
                            <h5><i>Senior ReactJS Technologist</i></h5>

                            <div>
                                <b><i>Email : siva.attili123@gmail.com</i></b>
                                <br />
                                <b><i>Mobile : +91-8106260436</i></b>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='col-md-8 mt-4'>
                    <TabSection />
                </div>


            </div>
            <br />


        </div>
    </div>)
}