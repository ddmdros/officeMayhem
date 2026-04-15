interface BrawlerCardProps {
  name: string;
  rarity: { name: string };
  classTypeName: string;
  imageUrl?: string;
  gameStats: {
    efficiency: number;
    resilience: number;
    caffeine: number;
    special: string;
  };
  isSelected: boolean;
  onSelect: () => void;
  description: string;
  starPowers?: SpecialItem[];
  gadgets?: SpecialItem[];
  onOpenDetails: () => void;
}

interface SpecialItem {
  name: string;
  description: string;
  descriptionHtml?: string;
}
const BrawlerCard: React.FC<BrawlerCardProps> = ({
  name,
  imageUrl,
  gameStats,
  isSelected,
  onOpenDetails,
  onSelect
}) => {
  return (
    <div
      className={`brawler-card ${isSelected ? 'card-selected' : ''}`}
      onClick={onSelect}
    >

      <div className="card-energy-cost">
        {gameStats.caffeine}
      </div>
  
      <div className="card-image-container">
        <img src={imageUrl} alt={name} className="brawler-img" />
      </div>

      <div className="card-info">
        <h3 className="brawler-name">{name}</h3>

        <div className="card-stats-row">
          <div className="stat efficiency">💼 {gameStats.efficiency}</div>
          <div className="stat resilience">🧘 {gameStats.resilience}</div>

        </div>
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
}; // Fechamento correto do componente
export default BrawlerCard;
