import './css/About.css';
import france from './images/france.jpg';
import city_of_love from './images/city-of-love.jpg';


function About() {
    return (
        <>
            <div>
                <div className='capital'>
                    <img src={france} alt = "Map of France" />
                    <p> 
                    <h2>The Capital of  France</h2>
                        Paris is the capital and the most densely populated city of France. 
                        With an estimated population of 2.16 million, Paris is the fourth-most populated city in the European Union and the 30th most densely populated city in the world.
                        Since the 17th century, Paris has been one of the world's major centers of commerce, finance, diplomacy, fashion, gastronomy, and science.
                    </p>
                </div>

                
                <div className='city_of_love'>
                    <img src={city_of_love} alt = "City of Love" />
                    <p>
                        <h2> The City Of Love </h2>
                        Paris was first know as the city of lights because it was one of the first cities to have street lighting.
                        Today it is one of the most popular locations for romantic getaways.
                        With the Georges Haussman-designed central Paris, as well as the charming cobbled streets of Montmartre and the Marais, the beauty in Paris enduces romance.
                        Not only is the scenery beautiful, but the people of Paris are passionate and are not afraid to show it.
                        The people and the scenery along with the amazing food make Paris a must visit!
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;