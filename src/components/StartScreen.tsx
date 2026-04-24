import "../styles/StartScreen.css";
import { useLanguage } from "../hooks/useLanguage";
import { useLanguageSwitcher } from "../hooks/useLanguageSwitcher";

const StartScreen: React.FC = () => {

  const { uiText } = useLanguage();
  const { toggleLanguage, language } = useLanguageSwitcher();
  const { title } = uiText.banner_intro;

  return (
    <section className="banner snap-section">

      <div className="lang-switcher-wrapper">
        <button className="lang-switch-button" onClick={toggleLanguage}>
          <span className="lang-icon">🌐</span>
          {language === 'en' ? 'PT-BR' : 'EN'}
        </button>
      </div>
      <div className="title-banner">
        <img src="https://media.ffycdn.net/eu/supercell/QiSx8VXvQ6KJjyJN9QYa.png?width=2400" alt="Friendly image of Mina from Brawl Starss upside down." title='banner image' />
      </div>
      <div className='banner-text'>
        <h1 className='brand-title'>{title}</h1>
        <p className='project-tagline'
        dangerouslySetInnerHTML={{__html: uiText.banner_intro.tagline}}></p>
      </div>

<footer className="legal-footer">
  <p className='footer-text'
        dangerouslySetInnerHTML={{__html: uiText.legal_footer.disclaimer}}></p>
</footer>

    </section>

  );
};

export default StartScreen;