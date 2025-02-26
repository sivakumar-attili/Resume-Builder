
import './App.css';
import { useRef } from 'react';

import ResumeBuilderMainComponent from './Components/ResumeBuiderMainComponent';
import generatePDF from 'react-to-pdf';
const options = {
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4',  // This will use the A4 page size (210mm x 297mm)
};


function App() {
  const targetRef = useRef();
  return (
    
      
     <ResumeBuilderMainComponent  />
    
  );
}

export default App;
