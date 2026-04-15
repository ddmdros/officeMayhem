import './Intro.css';


const Intro = ({ onStart }: { onStart: () => void }) => {
  return (
    <section className="snap-section story-section">
        <div className="story-body">
        <h2 className="brand-title  text-shadow">São Paulo, Brazil.</h2>
          <p className="narrative-text">
            Mina wanted to show off the Brazilian branch to the crew, 
            but Starr Corp's bureaucracy is a literal battlefield. 
            The elevators are possessed, the coffee is radioactive, 
            and HR is... well, we don't talk about HR.
          </p>

          <div className="rules-box">
            <h3>MISSION OBJECTIVES:</h3>
            <ul>
              <li>
                <strong>RECRUIT:</strong> Select <span>3 Brawlers</span> to form your specialized Task Force.
              </li>
              <li>
                <strong>SURVIVE:</strong> Navigate through <span>3 Floors</span> of unique corporate crises.
              </li>
              <li>
                <strong>DELIVER:</strong> Get the <span>Q1 Report</span> to the CEO's desk on the top floor.
              </li>
            </ul>
          </div>


          <div className='deploy-container'>
            <button
            className="deploy-button active"
            onClick={onStart}>
              START MISSION
            </button>
          </div>

          <p className="call-to-action">
            Choose your team wisely. The climb begins now.
          </p>
        </div>

    </section>
  );
};

export default Intro;