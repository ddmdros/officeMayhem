import './BrawlerModal.css';

const BrawlerModal = ({ brawler, onClose }: { brawler: any, onClose: () => void }) => {
  if (!brawler) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>x</button>
        
        <div className="modal-big-card">
          <div className="modal-header">
            <img src={brawler.imageUrl2} alt={brawler.name} className="modal-large-img" />
            <h2>{brawler.name}</h2>
            <div className='modal-headline'>
            <span className="modal-rarity" style={{color: brawler.rarityColor}}>{brawler.rarity.name}</span>
            <div className='class-wrapper'>
            <img src={brawler.classIcon} alt="class" className="modal-class-icon"/>
            <span className='brawler-class-name'>{brawler.class.name}</span></div>
            </div>
          </div>


          <div className="modal-body">
            <div className="modal-stats">
              <span>💼 Efficiency: {brawler.gameStats.efficiency}</span>
              <span>🧘 Resilience: {brawler.gameStats.resilience}</span>
              <span>☕ Cost: {brawler.gameStats.caffeine}</span>
            </div>
            
            <p className="modal-description">{brawler.description}</p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrawlerModal;