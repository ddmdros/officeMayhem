import React from "react";

interface HeroBannerProps {
  title: string;
  tagline: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, tagline }) => {
  return (
    <>
      <div className="title-banner">
        <img 
          src="https://media.ffycdn.net/eu/supercell/QiSx8VXvQ6KJjyJN9QYa.png?width=2400" 
          alt="Mina from Brawl Stars" 
          title='banner image' 
        />
      </div>
      <div className='banner-text'>
        <h1 className='brand-title'>{title}</h1>
        <p 
          className='project-tagline'
          dangerouslySetInnerHTML={{ __html: tagline }}
        />
      </div>
    </>
  );
};

export default HeroBanner;