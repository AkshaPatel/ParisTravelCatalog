import "./activities.css"
import disneyland from './images/disney.webp'
import cruise from './images/cruise.jpeg'
import baguette from './images/baguette.jpeg'
function Activities() {
    return (
        <div className="main">
            <div className="firstsection">
                
                <div className="text-box">
                    <img src={disneyland} alt="disneyland" className="disneyland"/>
                    <h2>Disney Land: Paris</h2>
                    <p>Not only does Paris have world famous bread and great scenic views, 
                        it is home to another disneyland. For those who are traveling 
                        to Paris, going to Disneyland is a great way to not only 
                        explore Paris but also Disney, which is known worldwide. An activity 
                        that captivates people is the Star Wars Hyperspace Mountain 
                        that has Star Wars related activities such as amusement and rides. 
                    </p>
                </div>
            </div> 

            <div className="secondsection">
                <div className="text-box">    
                    <img src={cruise} alt="cruise" className="cruise"/>
                    <h2>Paris River Cruise</h2>
                    <p>Along with eating a baguette by the Eiffel Tower, how about 
                        eating a baguette on a boat cruise while enjoying nightfall 
                        in Paris. This is a great scenic activity to do with loved ones 
                        and even by yourself. This boat cruise encapsulated everything 
                        Paris has to offer in one cruise ride. In the cruise enjoy great 
                        French delicacies and enjoy the atmosphere it offers. 

                    </p>
                </div>
            </div>

            <div className="thirdsection">
                <div className="text-box">
                    <img src={baguette} alt="baguette" className="baguetteimg" width="450" height="250"/>
                    <h2>Baguette Making Class</h2>
                    <p> Why eat baguettes when you could learn to make a baguette in Paris 
                        itself. Book a 2 hour baguette making course in the heart of Paris. 
                        This is a great way to learn the history behind the incredible and 
                        world renowned food. It is also a great way to connect with tourists and 
                        French locals who share similar passions as yourself. Paris isn't limited to
                        baguette making classes, it has many other classes as well such as bread and 
                        pastry making classes.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Activities;