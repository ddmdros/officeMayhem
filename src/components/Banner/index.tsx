import './Banner.css';
import { UI_TEXT } from '../../core/content';

const Banner: React.FC = () => {
  const lang = "en";
  const { title, tagline } = UI_TEXT[lang].banner;
  
  return (
    <section className="banner snap-section">
      <div className="title-banner">
        <img src="https://media.ffycdn.net/eu/supercell/QiSx8VXvQ6KJjyJN9QYa.png?width=2400" alt="Friendly image of Mina from Brawl Starss upside down." title='banner image'/>
      </div>
      <div className='banner-text'>
        <h1 className='brand-title'>{title}</h1>
        <p className='project-tagline'>{tagline}</p>
      </div>
    </section>
  );
};

export default Banner;