import "../../styles/EncounterRoom.css"
import { useLanguage } from "../../hooks/useLanguage";

export const EncounterRoom = ({ brawler, encounterIndex, onChoice, position, isActive }: any) => {

  const { isPt } = useLanguage();
  
  const currentAction = brawler?.encounters?.[encounterIndex];

  if (!currentAction) {
    return (
      <div className={`choice-card ${position} error`}>
        <p>{isPt ? "Dados não encontrados" : "Data not found"}</p>
      </div>
    );
  }
  const label = isPt ? currentAction.label_ptbr : currentAction.label;
  const effect = isPt ? currentAction.effect_ptbr : currentAction.effect;
  const consequence = isPt ? currentAction.consequence_ptbr : currentAction.consequence;
  
  const className = isPt ? brawler.class.name_ptbr : brawler.class.name;
  const classColor = brawler.class?.color || "#6200ea";

  const handleSelect = () => {
    if (!isActive) return;
    onChoice({
      chaos: currentAction.chaos,
      consequence: consequence, 
      brawlerName: brawler.name
    });
  };

  return (
    <div 
      className={`choice-card ${position} ${isActive ? 'active' : ''}`}
      onClick={handleSelect}
      style={{ '--class-color': classColor } as React.CSSProperties}
    >
      <div className="brawler-header">
        <div className="portrait-wrapper">
          <img src={brawler.imageUrl2} alt={brawler.name} className="brawler-thumb" />
        </div>
        <div className="brawler-info">
          <h3 className="brawler-name">{brawler.name}</h3>
          <span className="class-badge" style={{ backgroundColor: classColor }}>
            {className}
          </span>
        </div>
      </div>

      <div className="action-content">
        <h4 className="action-label">{label}</h4>
        <p className="action-effect">{effect}</p>
       
      </div>
    </div>
  );
};