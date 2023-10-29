import React, { useState } from 'react';
import '../styles/App.css';
import star from '../star.png';

const App = () => {
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

  const handleImageClick = () => {
    const newWidth = dimensions.width + 2;
    const newHeight = dimensions.height + 2;
    setDimensions({ width: newWidth, height: newHeight });
  };

  return (
    <div id="main">
      <img
        src={star}
        height={${dimensions.height}px}
        width={${dimensions.width}px}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default App;
