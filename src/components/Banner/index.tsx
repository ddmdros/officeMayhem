import './Banner.css';

interface BannerProps {
  title: string;
  tagline: string;
}

const Banner = ({ title, tagline }: BannerProps) => {
  return (
    <section className="banner snap-section">
      <div className="title-banner">
        <img src="https://media.ffycdn.net/eu/supercell/QiSx8VXvQ6KJjyJN9QYa.png?width=2400" alt="" />
      </div>
      <div className='banner-text'>
        <h1 className='brand-title'>{title}</h1>
        <p className='project-tagline'>{tagline}</p>
      </div>
    </section>
  );
};

export default Banner;