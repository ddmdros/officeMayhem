import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

interface SelectedTeamProps {
  team: any[];
  onRemove: (brawler: any) => void;
}

const SelectedTeam: React.FC<SelectedTeamProps> = ({ team, onRemove }) => {
  const slots = [0, 1, 2];
  const { uiText } = useLanguage();
  if (!uiText || !uiText.selected_team) return null;

  return (
    <div className="selected-team-container">
      <div className="team-header">
        <span className="task-force-label">{uiText.selected_team.task_force_label}</span>
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
              style={brawler ? {
                borderColor: brawler.classColor,
                boxShadow: `inset 0 0 10px ${brawler.classColor}44`
              } : {}}
            >
              {brawler ? (
                <div className="slot-content">
                  <img src={brawler.imageUrl2} alt={brawler.name} className="slot-avatar" />
                  <div className="slot-info"
                    style={{ '--brawler-color': brawler.classColor } as React.CSSProperties}>
                    <p className="slot-name">{brawler.name}</p>
                    <p className='slot-class'>{brawler.className}</p>
                  </div>

                  <div className="remove-indicator"><img src='/assets/icons/remove.png' />
                  </div>
                </div>
              ) : (
                <div className="slot-placeholder">
                  <span>{uiText.selected_team.empty_slot}</span>
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