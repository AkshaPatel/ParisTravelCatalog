import './css/Cuisine.css';

import cremeBrulee from './images/creme-brulee.jpg'
import beefBourguigon from './images/beef-bourguignon.jpg'
import croqueMonsieur from './images/croque-monsieur.jpg'


function Cuisine() {
    return (
        <div className= "main-cuisine">

            <div className= "cuisine-header"> 
                <h1> Cuisine </h1>
                <h4> Experience the these various cuisines when visiting Paris, France!</h4>
            </div>
                <h1> Croque Monsieur </h1>
            <div className = "sandwich">
                
                <img src = {croqueMonsieur} alt = "Croque Monsieur" />
                <p>
                    The Croque Monsieur is a sandwich made with ham, cheese, butter, and a special sauce called Bechamel. Its origins trace back to 1910, being found at a bistro in Paris. 
                The cheese is put on the outside and inside of the sandwich and is baked until the cheese has melted into each other. Either Gruyère, Emmental or Comte would be the types of cheese that would be put into the Croque Monsieur. 
                The Bechamel is a white sauce that is made of milk, fat, and flour and enhances the flavor of the sandwich. 
                The bread is usually a bit sweeter than your normal white bread and is sometimes dipped in egg before being baked. All the individual aspects of the dish being combined makes this a flavor like no other!
                This staple Parisian dish is popular during brunch or lunch and is typically served with a salad and can be found at bistros within Paris. 
                </p>
            </div>

                <h1> Boeuf Bourguignon </h1>
            <div className = "beef-stew">

                <img src = {beefBourguigon} alt = "Boeuf Bourguignon" />
                <p>
                    The Boeuf Bourguignon is French beef stew, that consists of Burgundy red wine, beef stock, onions, mushrooms, bouquet garni, and lardons.
                The origins of this dish was first documented in 1867 and was considered "low-class", due to being made with leftover meat. It became popular during the 20th century as a Burgundian dish.
                This dish is usually slow-cooked, sometime even taking over eight hours to create. The addition of the Burgundy red wine separates Beef Bourguignon from your typical beef stew.
                The flavors in this dish can be described as rich, with its various vegetables and seasonings, along with the high quality beef that is found inside the dish! Potatoes are also served inside the stew or on the side of the dish.
                This dish can be found across various restaurants and bistros across Paris. 
                </p>
            </div>
                
                <h1> Créme Brulée </h1>
            <div className = "dessert">
                
                <img src ={cremeBrulee} alt = "Créme Brulée" />
                <p>
                    The Créme Brulée is a dessert that contains vanilla custard that is topped with caramelized sugar. 
                The origins of this dessert can been seen within French cookbooks in the late 17th century, before being popularized in the 1980's.
                The top of the dessert is left warm from the caramelization, while the center of the dessert is kept ice cold to give its delectable flavor. 
                Some places that serve Créme Brulée will include fruits as garnishing, to give it an extra kick of flavor.  
                This dessert can be found at almost all places that serve dessert within Paris. 
                </p>
            </div>

        </div>
    );
}

export default Cuisine
//Need to create image file and add images for all the components.
