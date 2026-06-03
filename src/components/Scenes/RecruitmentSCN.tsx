import React from "react";
import { useState, useMemo } from "react";
import "../../styles/RecruitmentSCN.css";
import SelectedTeam from "../RecruitmentPage/SelectedTeam";
import BrawlerCard from "../RecruitmentPage/BrawlerCard";
import HelpRecruitmentModal from "../Modals/HelpRecruitmentModal";
import FilterRecruitment from "../Filters/FilterRecruitment";
import { useLanguage } from "../../hooks/useLanguage";
import type { Brawler } from "../../types/game";

interface RecruitmentProps {
  brawlers: Brawler[];
  selectedTeam: Brawler[];
  toggleSelection: (brawler: Brawler) => void;
  onOpenDetails: (brawler: Brawler) => void;
  onStartMission: () => void;
}

export const RecruitmentSCN: React.FC<RecruitmentProps> = ({
  brawlers,
  selectedTeam,
  toggleSelection,
  onOpenDetails,
  onStartMission,
}) => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("All");
  const { uiText } = useLanguage();

  const dynamicClasses = useMemo(() => {
    const unique = Array.from(
      new Set(brawlers.map((b) => b.class?.name).filter(Boolean)),
    );

    return ["All", ...unique];
  }, [brawlers]);

  if (!uiText || !uiText.recruitment_page) return null;

  const filteredBrawlers = brawlers.filter((b) => {
    if (selectedClass === "All") return true;
    return b.class?.name?.trim() === selectedClass;
  });

  return (
    <section className="recruitment-section snap-section">
      <div className="title-wrapper">
        <h2 className="brand-title text-shadow">
          {uiText.recruitment_page.brand_title}
        </h2>
        <button className="info-help-btn" onClick={() => setIsHelpOpen(true)}>
          ?
        </button>
      </div>

      <SelectedTeam team={selectedTeam} onRemove={toggleSelection} />

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
            isSelected={selectedTeam.some((st) => st.id === b.id)}
            onSelect={() => toggleSelection(b)}
            onOpenDetails={() => onOpenDetails(b)}
            classTypeName={b.class?.name_ptbr || b.class?.name || "Unknown"}
            iconUrl={b.class?.iconUrl || " "}
            classColor={b.class?.color || "#CCCCCC"}
          />
        ))}
      </div>

      <HelpRecruitmentModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      <div className="deploy-container">
        <button
          className={`deploy-button ${selectedTeam.length === 3 ? "active" : "disabled"}`}
          disabled={selectedTeam.length !== 3}
          onClick={onStartMission}
        >
          {selectedTeam.length === 3
            ? uiText.recruitment_page.btn_abled
            : uiText.recruitment_page.btn_disabled}
        </button>
      </div>
    </section>
  );
};

export default RecruitmentSCN;
