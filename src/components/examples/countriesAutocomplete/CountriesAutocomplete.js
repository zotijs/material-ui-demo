import React, { useState } from "react";
import { TextField } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";

const CountriesAutocomplete = ({ classes, data, ...restProps }) => {
  const [selection, setSelection] = useState("");
  const handleChange = (e, value) => !!value && setSelection(value.label);

  return (
    <div className={classes.container}>
      <Autocomplete
        style={{ width: 300 }}
        options={data}
        classes={{
          option: classes.option,
        }}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(option) => (
          <>
            {option.label} [{option.code}] +{option.phone}
          </>
        )}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <div className={classes.selection}>{selection}</div>
    </div>
  );
};

export default CountriesAutocomplete;
