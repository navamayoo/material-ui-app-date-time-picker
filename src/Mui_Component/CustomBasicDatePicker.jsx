import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "../App.css";

export default function BasicDatePicker({
  value,
  name,
  className,
  classes,
  arialabel,
  variant,
  format,
  margin,
  minDate,
  autoOk,
  inputProps,
  disabled,
  onChange,
  clearValueButton,
  onClearValueEvent,
  clearable,
  yearView
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex" alignItems="center" gap={2}>
        <DatePicker
          disabled={disabled}
          className={className}
          name={name}
          aria-label={arialabel}
          variant={variant}
          format={format}
          margin={margin}
          minDate={minDate}
          value={value}
          autoOk={autoOk}
          inputProps={inputProps}
          onChange={(event) => {
            if (onChange) {
              onChange(event);
            }
          }}
          views={yearView ? ["year"] : undefined} // Display only the year
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps, 
                endAdornment: (
                  <>
                    {params.InputProps?.endAdornment}{" "}
                    
                    {value && ( // Conditionally render the clear icon
                      <InputAdornment position="end">
                        <IconButton
                          onClick={onClearValueEvent}
                          edge="end"
                          size="small"
                        >
                          <ClearIcon />
                        </IconButton>
                      </InputAdornment>
                    )}
                  </>
                )
              }}
            />
          )}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       {clearValueButton && (
          //         <>
          //           <div >
          //             <IconButton
          //               title="Clear value"
          //               aria-label="Clear value"
          //               onClick={(e) => {
          //                 e.stopPropagation();
          //                 if (onClearValueEvent) {
          //                   onClearValueEvent(e);
          //                 }
          //               }}
          //             >
          //               <AppsIcon />
          //             </IconButton>
          //           </div>
          //         </>
          //       )}
          //     </InputAdornment>
          //   )
          // }}
        />
        <IconButton
          title="Clear value"
          aria-label="Clear value"
          onClick={(e) => {
            onClearValueEvent(e);
          }}
        >
          <ClearIcon />
        </IconButton>
      </Box>
    </LocalizationProvider>
  );
}
