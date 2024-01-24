import React from 'react';
import './CalendarGrid.css'; // Make sure to import the CSS file with the new name

const CalendarGrid = () => {
  const rows = 12;
  const columns = 31;

  // Generate buttons for the grid
  const generateButtons = () => {
    const buttons = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const buttonKey = `${i}-${j}`;
        buttons.push(<button key={buttonKey} className="responsive-button"></button>);
      }
    }

    return buttons;
  };

  return (
    <div className="calendar-grid">
      {generateButtons()}
    </div>
  );
};

export default CalendarGrid;
