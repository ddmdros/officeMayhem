import { useLanguage } from "../hooks/useLanguage";
import "../styles/Intro.css"

const Intro = ({ onStart }: { onStart: () => void }) => {
  const { uiText } = useLanguage();
  const { location, narrative, cto, startBtn } = uiText.intro_page;

  return (

    <section className="snap-section story-section">
      
      <div className="story-body">
        <h2 className="brand-title  text-shadow">{location}</h2>
        <p className="narrative-text">
          {narrative}
        </p>

        <p className="call-to-action">
          {cto}
        </p>

        <div className='deploy-container'>
          <button
            className="deploy-button active"
            onClick={onStart}>
            {startBtn}
          </button>
        </div>
      </div>

    </section>
    

  );
};

export default Intro;