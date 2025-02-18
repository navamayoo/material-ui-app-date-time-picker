import { useState } from "react";
import "./App.css";
import BasicDatePicker from "./Mui_Component/CustomBasicDatePicker";
import { format } from "date-fns";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleValueChange = (newDate) => {
    if (newDate) {
      console.log("newDate---->", newDate);
      setSelectedDate(newDate);
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
          clearValueButton={true}
          autoOk={true}
          clearable={true}
          inputProps={{
            "aria-label": "Single Release Date",
          }}
          value={selectedDate}
          onChange={(newDate) => handleValueChange(newDate)}
          onClearValueEvent={() => handleValueChange(null)}
        />
        <h6>
          {selectedDate
            ? format(new Date(selectedDate), "dd/MM/yyyy")
            : "No date selected"}
        </h6>
      </div>
    </div>
  );
}

export default App;