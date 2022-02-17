import logo from './logo.svg';
import './App.css';
// import { PDFViewer } from '@react-pdf/renderer';

import MyDocument from './MyDocument';
import JSPDF from './JSPDF';

function App() {
  return (
    <div className='App'>

      <MyDocument />

      {/* // PDF by using jspdf package
      <JSPDF /> */}
    </div>

  );
}

export default App;
