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

        <p className="call-to-action">
          Choose your team wisely. The climb begins now.
        </p>

        <div className='deploy-container'>
          <button
            className="deploy-button active"
            onClick={onStart}>
            ENTER THE OFFICE
          </button>
        </div>
      </div>

    </section>
  );
};

export default Intro;