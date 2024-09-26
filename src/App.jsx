import { useState } from 'react'
import './App.css'

import Start from './components/Start';
import Question from './components/Question';

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Question /> : <Start props={setStart} />} 
    </div>
  );
}

export default App
