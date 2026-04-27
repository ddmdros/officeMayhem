import React from 'react';
import "../../styles/FilterRecruitment.css"


interface FilterRecruitmentProps {
  selectedClass: string;
  onClassChange: (value: string) => void;
}

const CLASSES = ['All', 'Tank', 'Damage Dealer', 'Support', 'Assassin', 'Marksman', 'Artillery', 'Controller'];

export const FilterRecruitment: React.FC<FilterRecruitmentProps> = ({
  selectedClass,
  onClassChange
}) => {
  return (
    <div className="filter-wrapper">
      <div className="class-toggle-container">
        {CLASSES.map((cls) => (
          <button
            key={cls}
            className={`class-btn ${selectedClass === cls ? 'active' : ''}`}
            onClick={() => onClassChange(cls)}
          >
            {cls}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterRecruitment;