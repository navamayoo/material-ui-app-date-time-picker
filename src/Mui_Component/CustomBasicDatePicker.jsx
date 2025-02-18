import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { Box, Button, IconButton } from "@mui/material";
import { InputAdornment } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import "../App.css";

export default function BasicDatePicker({
  selectedDate,
  name,
  className,
  classes,
  arialabel,
  variant,
  format,
  margin,
  minDate,
  autoOk,
  value,
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
          value={selectedDate}
          autoOk={autoOk}
          inputProps={inputProps}
          onChange={(event) => {
            if (onChange) {
              onChange(event);
            }
          }}
          views={yearView ? ["year"] : undefined} // Display only the year
          slotProps={{
            textField: {
              InputProps: {
                endAdornment: (
                  <InputAdornment position="end">
                    {clearValueButton && clearable && (
                      <div className="globalClearButton">
                        <IconButton
                          title="Clear value"
                          aria-label="Clear value"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onClearValueEvent) {
                              onClearValueEvent(e);
                            }
                          }}
                        >
                          <ClearIcon />
                        </IconButton>
                      </div>
                    )}
                  </InputAdornment>
                )
              }
            }
          }}
        />
        <Button variant="outlined" onClick={onClearValueEvent}>
          Clear
        </Button>
      </Box>
    </LocalizationProvider>
  );
}