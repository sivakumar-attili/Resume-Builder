import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { experienceData } from "../consts"
export default function ExpCarousal() {
    return (<div >
        <Carousel >
            {experienceData.Details.map((exp, index) => (<div key={index} className="carousal-content p-2">
                <h1 >Company : {exp.company}</h1>
                <i><b>Role : {exp.role}</b></i>
                <p>Year : {exp.year}</p>
                <br/>
                <h3>Projects</h3>
                <ul >{exp.projects.map((proj,index)=>(<li key={index} >{proj}</li>))}</ul>
                <br/>
                <h3>Responsibilities</h3>
                <ul>{exp.responsibilities.map((res,index)=>(<li key={index} >{res}</li>))}</ul>

            </div>))}

        </Carousel>
    </div>)
}