import { useState } from "react";
import "./App.css";
import CustomDatePicker from "./Mui_Component/CustomDatePicker";
import { format } from "date-fns";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleValueChange = (newDate) => {
    if (newDate) {
      console.log("newDate---->", newDate);
      setSelectedDate(newDate);
    } else {
      setSelectedDate(null);
    }
  };

  const handleClear = () => {
    setSelectedDate(null);
  };

  const handleYearValueChange = (newDate) => {
    if (newDate) {
      console.log("newDate---->", newDate);
      setSelectedYear(newDate);
    } else {
      setSelectedYear(null);
    }
  };

  const handleYearClear = () => {
    setSelectedYear(null);
  };
  return (
    <div className="App">
      <div className="App-header">
        <div>
          <h5>{"MUI- Basic Date Picker"}</h5>
        </div>
        <div>
          <CustomDatePicker
            label="Select Date"
            id="BasicDateDate"
            title="Basic Date Picker"
            arialabel="Basic Date Picker"
            variant="inline"
            format="DD/MM/YYYY" // Format corrected for dayjs compatibility
            yearView={false}
            margin="normal"
            // minDate={new Date(Date.now())}
            autoOk={true}
            selectedDate={selectedDate}
            onChange={handleValueChange}
            onClick={handleClear} // Passed function reference correctly
          />
          <h6>
            {selectedDate
              ? format(new Date(selectedDate), "dd/MM/yyyy")
              : "No date selected"}
          </h6>
        </div>
        <div>
          <CustomDatePicker
            label="Select Year"
            id="BasicDateYear"
            title="Basic Date Picker"
            arialabel="Basic Date Picker"
            variant="inline"
            format="YYYY" // Format corrected for dayjs compatibility
            yearView={true}
            margin="normal"
            // minDate={new Date(Date.now())}
            autoOk={true}
            selectedDate={selectedYear}
            onChange={handleYearValueChange}
            onClick={handleYearClear} // Passed function reference correctly
          />
          <h6>
            {selectedYear
              ? format(new Date(selectedYear), "dd/MM/yyyy")
              : "No date selected"}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
