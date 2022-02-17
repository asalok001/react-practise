// Below if we see the output and elements only changes occurs at <p> and it flashes at the change. And <div> in which this <p> is contained will be flashed and no other elements will be untouched.
// And only re-renders the changes

import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showPara, setShowPara] = useState(false);
  console.log("App Running");

  const toggleParaHandler = useCallback(() => {
    setShowPara((prevState) => !prevState);
    // console.log("Button Running");
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showPara && <p>Hi there . This is new!</p>} */}
      <DemoOutput show={false} />
      <Button onClick={toggleParaHandler}>Toggle Para</Button>

    </div>
  );
}

export default App;
