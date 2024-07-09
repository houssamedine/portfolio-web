import "./About.css"
import  about from "../../images/about.jpg"
import { FcGallery,FcSlrBackSide,FcWorkflow} from "react-icons/fc";

export default function About() {
    return  <>
            <div className="container about-section">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className='about-image'>
                            <img src={about} alt="About-image" height="515px" width="300px" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className='about-details'>

                            <div className='about-title'>
                                <h5>About</h5>
                                <span className="line"></span>
                            </div>
                            <p> Lorem Ipsum est simplement du faux texte employé dans la composition et
                                la mise en page
                                avant
                                impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années
                                1500</p>
                            <div className='card-design'>
                                <div className='about-list-item'>
                                    <div className="about-detail-icon">
                                        <FcGallery size={50}/>
                                    </div>
                                    <div>
                                        <h6>Perfect Day Out
                                        </h6>
                                        <p>Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années
                                            1500</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-design'>
                                <div className='about-list-item'>
                                    <div className="about-detail-icon">
                                        <FcWorkflow size={50}/>
                                    </div>
                                    <div>
                                        <h6>Perfect Day Out
                                        </h6>
                                        <p>Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années
                                            1500</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-design'>
                                <div className='about-list-item'>
                                    <div className="about-detail-icon">
                                        <FcSlrBackSide size={50}/>
                                    </div>
                                    <div>
                                        <h6>Perfect Day Out
                                        </h6>
                                        <p>Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années
                                            1500</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
    </>
}