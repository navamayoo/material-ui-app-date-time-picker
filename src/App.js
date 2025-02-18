import { useState } from "react";
import "./App.css";
import BasicDatePicker from "./Mui_Component/CustomBasicDatePicker";
import { format } from "date-fns";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  // const handleValueChange = (newDate) => {
  //   setSelectedDate(newDate ? format(new Date(newDate), "yyyy-MM-dd") : null);
  // };

  const handleValueChange = (newDate) => {
    debugger;
    if (newDate) {
      setSelectedDate(format(new Date(newDate), "yyyy-MM-dd"));
    } else {
      setSelectedDate(null);
    }
  };


  return (
    <div className="App">
      <div className="App-header">
        <div>
          <h5>{"MUI- Basic Date Picker"}</h5>
        </div>

        <BasicDatePicker
          name="Basic Date Picker"
          id="BasicDatePicker"
          title="Basic Date Picker"
          arialabel="Basic Date Picker"
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          // minDate={new Date(Date.now())}
          clearValueButton={true}
          autoOk={true}
          clearable={true}
          inputProps={{
            "aria-label": "Single Release Date"
          }}
          value={selectedDate}
          onChange={(newDate) => handleValueChange(newDate)}
          onClearValueEvent={() => handleValueChange(null)}
        />
        <h6>
          {selectedDate
            ? selectedDate
            : "No date selected"}
        </h6>
      </div>
    </div>
  );
}

export default App;
