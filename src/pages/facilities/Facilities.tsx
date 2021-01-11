import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";

import { CustomDialog } from "../../components/CustomDialog";

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

  return (
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
      ></CustomDialog>
    </Paper>
  );
};

export default Facilities;
