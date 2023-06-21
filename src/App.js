import React from 'react';
import ColorPicker from './component/ColorPicker';
import "./App.css"

const App = () => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF','#E391EB','#144375','#088546'];

  return (
    <div>
      <h1>Color Picker </h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;



