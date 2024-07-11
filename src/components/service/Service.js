import './Service.css';
import { FcOk } from "react-icons/fc";

export default function Service() {

    const serviceData=[
        {id:1,service:"Web Development",service2:"Mobile App Development",service3:"UI/UX Design",service4:"Digital Marketing"},
        {id:2,service:"Web Development",service2:"Mobile App Development",service3:"UI/UX Design",service4:"Digital Marketing"},
        {id:3,service:"Web Development",service2:"Mobile App Development",service3:"UI/UX Design",service4:"Digital Marketing"},
        {id:4,service:"Web Development",service2:"Mobile App Development",service3:"UI/UX Design",service4:"Digital Marketing"},
        {id:5,service:"Web Development",service2:"Mobile App Development",service3:"UI/UX Design",service4:"Digital Marketing"},
        {id:6,service:"Web Development",service2:"Mobile App Development",service3:"UI/UX Design",service4:"Digital Marketing"},
        {id:7,service:"Web Development",service2:"Mobile App Development",service3:"UI/UX Design",service4:"Digital Marketing"},
        {id:8,service:"Web Development",service2:"Mobile App Development",service3:"UI/UX Design",service4:"Digital Marketing"},
    ]
    const colors=[
        "#CD5C5C", "#6495ED","#088f8f","#36ff25",
        "#e48c6f","#ab11ce","#df5be7","#ffe51e"
    ]

    return (
        <div className="container service-section">
            <div className='section-title'>
                <h5>Services</h5>
                <span className="line-service"></span>
            </div>

            <div className="row">
                {serviceData.map((item, index) => {
                    return (
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
                            <div className="service">
                                <span className="service-number" style={{backgroundColor:colors[index]}}>
                                    <p>{item.id}</p>
                                </span>
                                <div className="list-service">
                                    <p><FcOk size={20} style={{margin: "5px"}}/>{item.service}</p>
                                    <span className="service_underline"></span>
                                    <p><FcOk size={20} style={{margin: "5px"}}/>{item.service2}</p>
                                    <span className="service_underline"></span>
                                    <p><FcOk size={20} style={{margin: "5px"}}/>{item.service3}</p>
                                    <span className="service_underline"></span>
                                    <p><FcOk size={20} style={{margin: "5px"}}/>{item.service4}</p>
                                    <span className="service_underline"></span>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
