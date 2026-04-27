import React from 'react';
import { useState, useMemo } from 'react';
import "../../styles/Recruitment.css"
import SelectedTeam from './SelectedTeam';
import BrawlerCard from './BrawlerCard';
import HelpRecruitmentModal from '../Modals/HelpRecruitmentModal';
import FilterRecruitment from "../Filters/FilterRecruitment"
import { useLanguage } from '../../hooks/useLanguage';


interface RecruitmentProps {
  brawlers: any[];
  selectedTeam: any[];
  toggleSelection: (brawler: any) => void;
  onOpenDetails: (brawler: any) => void;
  onStartMission: () => void;
}

export const Recruitment: React.FC<RecruitmentProps> = ({
  brawlers,
  selectedTeam,
  toggleSelection,
  onOpenDetails,
  onStartMission
}) => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState('All');
  const { uiText } = useLanguage();

  const dynamicClasses = useMemo(() => {
    const unique = Array.from(new Set(brawlers.map(b => {
      return b.class?.name || b.className;
    }).filter(Boolean)));

    return ['All', ...unique];
  }, [brawlers]);

  if (!uiText || !uiText.recruitment_page) return null;

  const filteredBrawlers = brawlers.filter(b => {
    if (selectedClass === "All") return true;
    const brawlerClassName = b.class?.name || b.className;
    return brawlerClassName?.trim() === selectedClass;
  });

  return (
    <section className="recruitment-section snap-section">
      <div className='title-wrapper'>
        <h2 className="brand-title text-shadow">{uiText.recruitment_page.brand_title}</h2>
        <button className='info-help-btn' onClick={() => setIsHelpOpen(true)}>?</button>
      </div>

      <SelectedTeam
        team={selectedTeam}
        onRemove={toggleSelection}

      />


      <FilterRecruitment
        classes={dynamicClasses}
        selectedClass={selectedClass}
        onClassChange={setSelectedClass}
      />

      <div className="brawler-grid">
        {filteredBrawlers.map((b) => (
          <BrawlerCard
            key={b.id}
            {...b}
            imageUrl={b.imageUrl2}
            isSelected={selectedTeam.some(st => st.id === b.id)}
            onSelect={() => toggleSelection(b)}
            onOpenDetails={() => onOpenDetails(b)}
            classTypeName={b.class?.name_ptbr || b.className}
            iconUrl={b.class?.iconUrl || b.iconUrl}
            classColor={b.class?.color || b.classColor}
          />
        ))}
      </div>

      <HelpRecruitmentModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      <div className="deploy-container">
        <button
          className={`deploy-button ${selectedTeam.length === 3 ? 'active' : 'disabled'}`}
          disabled={selectedTeam.length !== 3}
          onClick={onStartMission}

        >
          {selectedTeam.length === 3 ? uiText.recruitment_page.btn_abled : uiText.recruitment_page.btn_disabled}
        </button>
      </div>
    </section>
  );
};

export default Recruitment;