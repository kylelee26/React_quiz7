import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary" href="https://www.youtube.com/watch?v=emtRzo8U5tA">
        毛聖淇走路
      </Button>
      <Button variant="contained" color="secondary">
        每天都要打電動
      </Button>
      <Button variant="contained" color="primary">
        一代一代一代
      </Button>
      <Button  variant="outlined" color="primary" href="https://www.cgu.edu.tw/">
        長庚大學
      </Button>
    </div>
  );
}