import React from 'react';
import './CalendarGrid.css';

const CalendarGrid = () => {
  const months = [
    'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D',
  ];


  const daysInMonth = 31;

  const generateButtons = () => {
    const buttons = [];

    for (let i = 0; i < months.length; i++) {
      for (let j = 0; j < daysInMonth; j++) {
        const buttonKey = `${i}-${j}`;
        buttons.push(<button key={buttonKey} className="responsive-button"></button>);
      }
    }

    return buttons;
  };

  const generateColumnLabels = () => {
    return Array.from({ length: daysInMonth }, (_, index) => (
      <div key={index + 1} className="column-label">{index + 1}</div>
    ));
  };

  const generateRowLabels = () => {
    return months.map((month, index) => (
      <div key={index} className="row-label">{month}</div>
    ));
  };

  return (
    <div className="calendar-container">
      <div className="column-labels">
        {generateColumnLabels()}
      </div>
      <div className="row-labels">
        {generateRowLabels()}
      </div>
      <div className="grid">
        {generateButtons()}
      </div>
    </div>
  );
};

export default CalendarGrid;