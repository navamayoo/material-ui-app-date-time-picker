import React from "react";
import {  IconButton, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ClearIcon from "@mui/icons-material/Clear";
import dayjs from "dayjs";

const CustomDatePicker = ({
  selectedDate,
  name,
  variant,
  format,
  margin,
  minDate,
  disabled,
  onChange,
  onClick,
  yearView,
  label
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          display: "inline-block",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <DatePicker
            label={label}
            name={name}
            value={selectedDate ? dayjs(selectedDate) : null} // Convert to dayjs
            disabled={disabled}
            variant={variant}
            format={format}
            margin={margin}
            minDate={minDate ? dayjs(minDate) : null} // Convert to dayjs
            onChange={(newDate) => onChange(newDate)}
            views={yearView ? ["year"] : undefined}
            slotProps={{
              textField: {
                fullWidth: true,
                sx: {
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                    "& fieldset": { border: "none" }
                  }
                }
              }
            }}
          />
          {selectedDate && (
            <IconButton onClick={onClick}>
              <ClearIcon />
            </IconButton>
          )}
        </Stack>
      </div>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
