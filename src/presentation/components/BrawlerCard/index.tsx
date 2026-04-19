import React from 'react';

interface BrawlerCardProps {
  name: string;
  classTypeName: string; 
  imageUrl?: string;
  isSelected: boolean;
  onSelect: () => void;
  onOpenDetails: () => void;
}

const BrawlerCard: React.FC<BrawlerCardProps> = ({
  name,
  classTypeName,
  imageUrl,
  isSelected,
  onOpenDetails,
  onSelect
}) => {
  return (
    <div
      className={`brawler-card ${isSelected ? 'card-selected' : ''}`}
      onClick={onSelect}
    >
  
      <div className="card-image-container">
        <img src={imageUrl} alt={name} className="brawler-img" />
      </div>

      <div className="card-info">
        <h3 className="brawler-name">{name}</h3>
        <span className="class-tag">{classTypeName}</span>
      </div>

      <div className="card-selection-footer">
        <button
          className="details-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails();
          }}
        >
          DETAILS
        </button>
      </div>

    </div>
  );
}; 

export default BrawlerCard;