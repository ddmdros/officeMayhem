import React from 'react';

interface BrawlerCardProps {
  name: string;
  classTypeName: string; // Usando a string que você definiu na interface
  imageUrl?: string;
  isSelected: boolean;
  onSelect: () => void;
  onOpenDetails: () => void;
  // Removi gameStats, rarity e descriptions para limpar o componente
}

const BrawlerCard: React.FC<BrawlerCardProps> = ({
  name,
  classTypeName, // Pegamos o nome da classe aqui
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
        {/* CORRIGIDO: Agora usamos a variável classTypeName que vem das props */}
        <span className="class-tag">{classTypeName}</span>
      </div>

      <div className="card-selection-footer">
        <button
          className="details-btn"
          onClick={(e) => {
            e.stopPropagation(); // Evita selecionar o card ao clicar em detalhes
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