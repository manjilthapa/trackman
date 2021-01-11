import React from "react";
import {
  Dialog,
  Typography,
  DialogTitle,
  DialogContent,
  makeStyles,
  Button,
} from "@material-ui/core";

interface Props {
  title?: string;
  openDialog: boolean;
  setOpenDialog:
    | React.Dispatch<React.SetStateAction<boolean>>
    | ((openDialog: boolean) => void);
}

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(3),
    position: "absolute",
    top: theme.spacing(5),
  },
}));

export const CustomDialog: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Dialog
      open={props.openDialog}
      maxWidth="xs"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <Button color="secondary" onClick={() => props.setOpenDialog(false)}>
            X
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{props.children}</DialogContent>
    </Dialog>
  );
};
