import "./Testimonial.css"
import {useState} from "react";
export default function Testimonial() {
    const data= [
        {image:"https://images.pexels.com/photos/25568965/pexels-photo-25568965/free-photo-of-bois-mode-gens-personnes.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Jon Doe",
            position:"Full Stack Software Developer",},
        {image:"https://images.pexels.com/photos/20062433/pexels-photo-20062433/free-photo-of-femme-fleurs-etre-assis-paques.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Mulier",
            position:"FUI/UX Designer",},
        {image:"https://images.pexels.com/photos/2876799/pexels-photo-2876799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Alexander",
            position:"JavaScript Developer",},
        {image:"https://images.pexels.com/photos/2847523/pexels-photo-2847523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Charlotte",
            position:"Node Js Developer",},
        {image:"https://images.pexels.com/photos/3214768/pexels-photo-3214768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Elizabet",
            position:"BI Developer",},
        {image:"https://images.pexels.com/photos/3138577/pexels-photo-3138577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Michel",
            position:"Cyber Security",},
        {image:"https://images.pexels.com/photos/3067482/pexels-photo-3067482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Jacob",
            position:"Next Js Developer",},
        {image:"https://images.pexels.com/photos/3141401/pexels-photo-3141401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Emily",
            position:"Next Js Developer",},
        {image:"https://images.pexels.com/photos/25568965/pexels-photo-25568965/free-photo-of-bois-mode-gens-personnes.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Jon Doe",
            position:"Full Stack Software Developer",},
        {image:"https://images.pexels.com/photos/20062433/pexels-photo-20062433/free-photo-of-femme-fleurs-etre-assis-paques.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Mulier",
            position:"FUI/UX Designer",},
        {image:"https://images.pexels.com/photos/2876799/pexels-photo-2876799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Alexander",
            position:"JavaScript Developer",},
        {image:"https://images.pexels.com/photos/2876767/pexels-photo-2876767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Jaydon",
            position:"Full Stack Software Developer",},
        {image:"https://images.pexels.com/photos/3214768/pexels-photo-3214768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Elizabet",
            position:"BI Developer",},
        {image:"https://images.pexels.com/photos/3138577/pexels-photo-3138577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Michel",
            position:"Cyber Security",},
        {image:"https://images.pexels.com/photos/3067482/pexels-photo-3067482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            name:"Jacob",
            position:"Next Js Developer",}
    ]

    const [showMorePost, setShowMorePost]=useState(6);

    const loadMorePost=()=>{
        setShowMorePost((prevState)=> prevState+3);
    }

    return <div className="container testimonial-section">
        <div className='section-title'>
            <h5>Testimonial</h5>
            <span className="line-service"></span>
        </div>
        <div className="row">
            {data.slice(0,showMorePost).map((item, index) => {
                return (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className="testimonial">
                                <span className="testimonial-image">
                                    <img src={item.image} alt=""/>
                                </span>
                            <div className="list-testimonial">
                                <p>{item.description}</p>
                                <p><span className="name">{item.name}</span>
                                </p>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            {showMorePost>=data.length ? null : (
                <div className="showMore">
                    <span className="btn btn-secondary" onClick={loadMorePost}>Show More</span>
                </div>
            )}

        </div>

    </div>
}