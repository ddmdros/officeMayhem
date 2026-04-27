import React from 'react';
import "../../styles/FilterRecruitment.css"



interface FilterRecruitmentProps {
  selectedClass: string;
  onClassChange: (value: string) => void;
  classes: string[];
}

export const FilterRecruitment: React.FC<FilterRecruitmentProps> = ({
  selectedClass,
  onClassChange,
  classes
}) => {
  return (
    <div className="filter-wrapper">
      <div className="class-toggle-container">
        {classes.map((cls) => (
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