import "../../styles/BrawlerModal.css"

const BrawlerModal = ({ brawler, onClose }: { brawler: any, onClose: () => void }) => {
  if (!brawler) return null;


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ '--brawler-color': brawler.classColor } as React.CSSProperties}
      >
        <button className="close-modal" onClick={onClose}>x</button>

        <div className="modal-big-card">
          <div className="modal-header">
            <img src={brawler.imageUrl2} alt={brawler.name} className="modal-large-img" />
            <h2>{brawler.name}</h2>
            <div className='modal-headline'>
              <div className='class-wrapper'>
                <img src={brawler.iconUrl} alt="class" className="modal-class-icon" />
                <span className='brawler-class-name'>{brawler.className}</span></div>
            </div>
          </div>

          <div className="modal-body">

            <p className="modal-description">{brawler.description}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BrawlerModal;