import React from 'react';
import './FilterRecruitment.css';

interface FilterRecruitmentProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedClass: string;
  onClassChange: (value: string) => void;
  maxCaffeine: number;
  onCaffeineChange: (value: number) => void;
}

const CLASSES = ['All', 'Tank', 'Damage Dealer', 'Support', 'Assassin', 'Marksman', 'Artillery', 'Controller'];

export const FilterRecruitment: React.FC<FilterRecruitmentProps> = ({
  searchTerm,
  onSearchChange,
  selectedClass,
  onClassChange,
  maxCaffeine,
  onCaffeineChange
}) => {
  return (
    <div className="filter-wrapper">
      {/* Search Input */}
      <div className="filter-group search-group">
        <label>SEARCH SPECIALIST</label>
        <input 
          type="text" 
          placeholder="Name..." 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Caffeine Range */}
      <div className="filter-group cost-group">
        <label>MAX CAFFEINE: ☕ {maxCaffeine}</label>
        <input 
          type="range" 
          min="1" 
          max="4" 
          step="1"
          value={maxCaffeine}
          onChange={(e) => onCaffeineChange(Number(e.target.value))}
        />
        <div className="range-steps">
          <span>1</span><span>2</span><span>3</span><span>4</span>
        </div>
      </div>

      {/* Class Selector */}
      <div className="filter-group class-group">
        <label>DEPARTMENT (CLASS)</label>
        <select value={selectedClass} onChange={(e) => onClassChange(e.target.value)}>
          {CLASSES.map(cls => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterRecruitment;