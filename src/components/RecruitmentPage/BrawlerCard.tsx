import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

interface BrawlerCardProps {
  name: string;
  classTypeName: string; 
  iconUrl: string;
  imageUrl?: string;
  isSelected: boolean;
  onSelect: () => void;
  onOpenDetails: () => void;
  classColor: string;
}

const BrawlerCard: React.FC<BrawlerCardProps> = ({
  name,
  classTypeName,
  imageUrl,
  isSelected,
  onOpenDetails,
  onSelect,
  iconUrl,
  classColor
}) => {
  const { uiText } = useLanguage();

  return (
    <div
      className={`brawler-card ${isSelected ? 'card-selected' : ''}`}
      onClick={onSelect}
      style={{backgroundColor: classColor}}
    >
  <div className="class-badge-floating">
        <img src={iconUrl} alt="class icon" />
      </div>


      <div className="card-image-container">
        <img src={imageUrl} alt={name} className="brawler-img" />
      </div>

      <div className="card-info">
        <h3 className="brawler-name">{name}</h3>
        <span className='class-subtitle'>{classTypeName}</span>
              
      </div>

      <div className="card-selection-footer">
        <button
          className="details-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails();
          }}
        >
          {uiText?.brawler_card?.btn_details || "DETAILS"}
        </button>
      </div>

    </div>
  );
}; 

export default BrawlerCard;