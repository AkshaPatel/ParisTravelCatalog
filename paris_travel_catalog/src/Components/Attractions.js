import './css/Attractions.css';
import eiffel_tower from './images/eiffel.jpg'
import the_louvre from './images/louvre.webp'
import arc_de_triomphe from './images/arc_de_triomphe.webp'
function Attractions() {
  return (
    <div className='container'>
      <div className='header'> 
        <h1>Sights and Attractions</h1>
        <h2>Perfect places for your visit</h2>
      </div>
        <div className="eiffel">
          <img src={eiffel_tower} alt="The Eiffel Tower" />
          <p>
          <h2>The Eiffel Tower</h2>
            Come and discover the Eiffel Tower: the only trip to the top of its kind in Europe, one where emotions carry you away. 
            From the esplanade to the summit you will experience a whole series of emotions. 
            Soak in the breathtakingly unique views of Paris from every floor, feel the goosebumps as you walk the glass floor on the 1st floor, experience the incredible ascent by stairway or lift, the indescribable awe at the tonnes of iron above you as you stand on the esplanade. 
            Vertigo grips you as you leave the lift at the top of the tower and see the people down on the Champs-de-Mars and the cars driving along Trocadéro! And the Eiffel Tower always has something to offer, day or night, summer or winter!
          </p>
        </div>
        <div className="louvre">
          <p>
          <h2>The Louvre</h2>
          There are plenty of good reasons to visit the Louvre! So many works of art to discover in this fabulous museum that used to be a palace! 
          So plan your visit in advance to make the most of it. Why not pick one of our visitor trails to follow a theme-based tour? 
          And when you need a break, where better than the museum's restful gardens?
          </p>
          <img src={the_louvre} alt="The Louvre" />
        </div>
        <div className="triomphe">
          <img src={arc_de_triomphe} alt="Arc de Triomphe" />
          <p>
          <h2>Arc de Triomphe</h2>
          The Arc de Triomphe honors those who fought and died for France during the French Revolution and the Napoleonic Wars, with the names of all French victories and generals inscribed on its inner and outer surfaces. 
          Under its vault lies the Tomb of the Unknown Soldier from the First World War. 
          The monument was designed by Jean Chalgrin in 1806 on the orders of Napoleon, and inaugurated in 1836 for the sixth anniversary of the Three Glorious. 
          50 meters high, 45 meters wide and 22 meters deep, it was the largest triumphal arch in the world before the construction of the one in Pyongyang in 1982. 
          Its design was inspired by the Roman Arch of Titus.
          </p>
        </div>
        {/* The flag follows */}
        <div className='footer'>
          <div className='footer1'>Paris is <span className='ital'>yours</span> to explore</div>
          <div className='footer2'><br/>So...</div>
          <div className='footer3'>What are you waiting for?</div>
        </div>
    </div>
  );
}

export default Attractions;