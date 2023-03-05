import "./activities.css"
import disneyland from './images/disney.webp'
import cruise from './images/cruise.jpeg'
import baguette from './images/baguette.jpeg'
function Activities() {
    return (
        <div className="main">
            <div className="firstsection">
                
                <div className="text-box">
                    <img src={disneyland} alt=""/>
                    <h2>Disney Land: Paris</h2>
                    <p>
                    </p>
                </div>
            </div> 

            <div className="secondsection">
                <div className="text-box">    
                    <img src={cruise} alt="" />
                    <h2>Paris River Cruise</h2>
                    <p>
                    </p>
                </div>
            </div>

            <div className="thirdsection">
                <div className="text-box">
                    <img src={baguette} alt="" className="baguetteimg" width="350" height="250"/>
                    <h2>Baguette Making Class</h2>
                    <p>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Activities;