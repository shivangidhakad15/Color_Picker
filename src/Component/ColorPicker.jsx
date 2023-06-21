import React, { useState } from 'react';
import "./ColorPicker.css";

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  const toggleColorList = () => {
    setColorListVisible(!isColorListVisible);
  };

  return (
    <div className='container'>
      <button className='btn'
        onClick={toggleColorList}
        style={{ backgroundColor: selectedColor }}
      >
        {selectedColor ? `Selected color: ${selectedColor}` : 'Pick a color'}
      </button> <br /> 
      {isColorListVisible && (
        <ul className='list' style={{ listStyleType: 'none', padding: 0 }}>
          {colors.map((color, index) => (
            <li className='list-items'
              key={index}
              style={{
                backgroundColor: color,
                width: '60px',
                height: '60px',
                display: 'inline-block',
                margin: '20px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorPicker;
