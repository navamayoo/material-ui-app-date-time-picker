
import { useState } from 'react';
import './App.css';
import BasicDatePicker from './Mui_Component/CustomBasicDatePicker';
import { format } from 'date-fns';

function App() {

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="App">
      <div className="App-header">
        <div><h5>{"MUI- Basic Date Picker"}</h5></div>
      <BasicDatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          Picker_name="Select a date"
        />
         <h6>{selectedDate ? format(new Date(selectedDate), 'dd-MM-yyyy') : 'No date selected'}</h6>
      </div>
     
    </div>
  );
}

export default App;
