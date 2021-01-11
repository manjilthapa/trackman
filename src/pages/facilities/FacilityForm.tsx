import React, { useState } from "react";
import {
  Grid,
  Divider,
  makeStyles,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
import { InputField } from "../../components/InputField";

//import * as facilityService from "../../services/FacilityServices";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const FacilityForm = () => {
  const classes = useStyles();
  const [facility, setFacility] = useState({
    id: 0,
    name: "",
    type: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFacility({
      ...facility,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(facility);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <InputField
            name="name"
            label="Facility Name"
            value={facility.name}
            onChange={handleChange}
          />

          <FormControl>
            <RadioGroup
              row
              name="type"
              value={facility.type}
              onChange={handleChange}
            >
              <FormControlLabel
                value="range"
                control={<Radio />}
                label="Range"
              />
              <FormControlLabel
                value="indoor"
                control={<Radio />}
                label="Indoor"
              />
            </RadioGroup>
          </FormControl>
          <InputField
            name="address"
            label="Address"
            value={facility.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <Button href="#text-buttons" color="primary">
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FacilityForm;
