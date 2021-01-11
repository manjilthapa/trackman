import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
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
      <div>
        {facilities &&
          facilities.map((facility) => {
            return (
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {facility.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
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
            );
          })}
      </div>
    </>
  );
};

export default Facilities;
