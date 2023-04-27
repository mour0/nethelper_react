import React, { useCallback } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

export default function BtnActions({
  index,
  setIndex,
  setOutput,
  refCIDR,
  setSnackbarState,
  setSVG,
}) {
  const handleActionChange = useCallback(
    (event) => {
      setIndex(event.target.value);
      setOutput([]);
      setSnackbarState({ open: false, message: "" });
      setSVG("");
      refCIDR.current.value = "";
    },
    [setIndex]
  );

  return (
    <FormControl fullWidth>
      <InputLabel id="select-index-label">Action</InputLabel>
      <Select
        labelId="select-index-label"
        id="select-index"
        value={index}
        label="Action"
        onChange={handleActionChange}
      >
        <MenuItem value={40}>IPv4</MenuItem>
        <MenuItem value={41}>IPv4 Mask</MenuItem>
        <MenuItem value={42}>VLMS</MenuItem>
        <MenuItem value={60}>IPv6</MenuItem>
        <MenuItem value={61}>IPv6 Mask</MenuItem>
      </Select>
    </FormControl>
  );
}
