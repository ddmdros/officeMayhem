import "../styles/EncounterRoom.css"


export const EncounterRoom = ({ brawler, encounter, onChoice, position, isActive }: {
  brawler: any,
  encounter: any,
  onChoice: (result: any) => void,
  position: string,
  isActive: boolean
}) => {

  const action = encounter.options[brawler.class.name] || encounter.options.Default;

  return (
    <div 
      className={`choice-card ${position}`} 
      onClick={() => isActive && onChoice(action.result)}
    >
      <div className="brawler-header">
        <div className="portrait-wrapper">
          <img src={brawler.imageUrl2} alt={brawler.name} className="brawler-thumb" />
        </div>
        <div className="brawler-info">
          <h3 className="brawler-name">{brawler.name}</h3>
          <span className="class-badge">{brawler.class.name}</span>
        </div>
      </div>

      <div className="action-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
    <h4 className="action-label">{action.label}</h4>
    <p className="action-effect">
        {action.effect}
    </p>
    
    <div className="result-preview">
        {action.result.chaos !== 0 && (
            <div className="res-pill bad">▲ {action.result.chaos}% Chaos</div>
        )}
        {action.result.overtime !== 0 && (
            <div className="res-pill bad">▲ {action.result.overtime}% Time</div>
        )}
    </div>
</div>
    </div>
  );
};