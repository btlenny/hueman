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

  return (
    <div className="calendar-container">
      <div className="row-labels">
        {months.map((month, index) => (
          <div key={index} className="row-label">{month}</div>
        ))}
      </div>
      <div className="grid">
        {generateButtons()}
      </div>
    </div>
  );
};

export default CalendarGrid;
