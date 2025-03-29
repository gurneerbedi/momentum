import "./Hero.scss";
import HeroImg from "/images/hero2.jpg"

function Hero() {
    return (
        <section id="home">
            <div className="homepage">
                <div className="homepage__description">
                    <div className = "homepage__description-container">
               <h1 className="homepage__title">Momentum</h1>
               <p className="homepage__paragraph"> Through expert tutoring and personalized learning, we’re <span className="homepage__paragraph-bold">Empowering Minds, Igniting Momentum </span> - helping students thrive today and lead tomorrow. </p>
               <button className="homepage__button">Learn More</button>
               </div>
               </div>
               <img className ="homepage__img"src={HeroImg} alt="Hero Img" />
               <div className="homepage__button-container">
               <button className="homepage__button2">Learn More</button>
               </div>
            </div>
            
        </section>
    );
}

export default Hero;