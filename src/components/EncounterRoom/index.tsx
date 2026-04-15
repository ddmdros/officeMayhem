import "./EncounterRoom.css"

export const EncounterRoom = ({ brawler, encounter, onChoice }: {
  brawler: any,
  encounter: any,
  onChoice: (result: any) => void
}) => {

  const action = encounter.options[brawler.class.name] || encounter.options.Default;

  return (
    <div className="choice-card" onClick={() => onChoice(action.result)}>
      <div className="brawler-header">
        <img src={brawler.imageUrl2} alt={brawler.name} />
        <div className="brawler-info">
          <h3>{brawler.name}</h3>
          <span className="class-badge">{brawler.class.name}</span>
        </div>
      </div>
      <div className="action-details">
        <p className="action-label">{action.label}</p>
        <p className="action-effect">{action.effect}</p>
        <div className="result-preview">
          <span className={action.result.stress > 0 ? 'result-stress-bad' : 'result-stress-good'}>
            {action.result.stress > 0 ? `+${action.result.stress}% Stress` : `${action.result.stress}% Stress`}
          </span>
          {action.result.energy !== 0 && (
            <span className="result-caffeine">
              | {action.result.energy > 0 ? '+' : ''}{action.result.energy} Caffeine
            </span>
          )}
        </div>
      </div>
    </div>
  );
};