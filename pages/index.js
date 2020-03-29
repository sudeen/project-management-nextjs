import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// import theme from "../src/ui/theme";

const useStyles = makeStyles(theme => ({}));

export default function ProjectManager() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h1">Projects</Typography>
      </Grid>
    </Grid>
  );
}
