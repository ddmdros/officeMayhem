import React from 'react';

interface SelectedTeamProps {
  team: any[];
  onRemove: (brawler: any) => void;
}

const SelectedTeam: React.FC<SelectedTeamProps> = ({ team, onRemove }) => {
  const slots = [0, 1, 2];
  
  return (
    <div className="selected-team-container">
      <div className="team-header">
        <span className="task-force-label">STARR CORP TASK FORCE</span>
        <div className="status-indicator">
          <div className={`dot ${team.length === 3 ? 'ready' : 'recruiting'}`}></div>
        </div>
      </div>

      <div className="slots-grid">
        {slots.map((index) => {
          const brawler = team[index];
          
          return (
            <div
              key={index}
              className={`team-slot ${brawler ? 'filled' : 'empty'}`}
              onClick={() => brawler && onRemove(brawler)}
            >
              {brawler ? (
                <div className="slot-content">
                  <img src={brawler.imageUrl2} alt={brawler.name} className="slot-avatar" />
                  <div className="slot-info">
                    <p className="slot-name">{brawler.name}</p>
                    <p className='slot-class'>{brawler.class.name}</p>
                  </div>

                  <div className="remove-indicator">-</div>
                </div>
              ) : (
                <div className="slot-placeholder">
                  <span>EMPTY SLOT</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedTeam;