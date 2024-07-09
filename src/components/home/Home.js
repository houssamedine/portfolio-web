import "./Home.css"
import Typewriter from "typewriter-effect";
export default function Home (){
    return  <>
        <div className="container-fluid home">
            <div className="container home-content">
                <h2>
                    <Typewriter
                        options={{
                            strings:[
                                'Web Development',
                                'Mobile App Development',
                                'UI/UX Design',
                                'Product Marketing',
                                'Digital Marketing',
                                'Customer Service'
                            ],
                            delay:8, //la durée de l'animation
                            autoStart:true,
                            loop:true,
                        }}
                />
                </h2>
                <p>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</p>
                <span className="view-details-home-button">View Details</span>
            </div>
        </div>
    </>
}