import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";

import { CustomDialog } from "../../components/CustomDialog";
import FacilityForm from "./FacilityForm";

import * as facilityService from "../../services/FacilityService";
import { Facility } from "../../types/Facility";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  addButton: {
    position: "absolute",
    right: "10px",
  },
  gridContent: {
    flexGrow: 1,
    margin: theme.spacing(3),
  },
}));

const Facilities = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [facilities, setFacilities] = useState<Facility[]>();

  useEffect(() => {
    const fetchData = async () => {
      const value = await facilityService.getAllFacilities();
      //console.log(value);
      setFacilities(value);
    };
    fetchData();
  }, [facilities]);

  // console.log(facilities);

  return (
    <>
      <Paper className={classes.pageContent}>
        <Button
          variant="contained"
          color="primary"
          className={classes.addButton}
          onClick={() => setOpenDialog(true)}
        >
          Add new
        </Button>

        <CustomDialog
          title="Facility Form"
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        >
          <FacilityForm />
        </CustomDialog>
      </Paper>
      <Grid container spacing={2} className={classes.gridContent}>
        {facilities &&
          facilities.map((facility) => {
            return (
              <Grid item xs={3}>
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {facility.name}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {facility.type}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {facility.address}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Facilities;
