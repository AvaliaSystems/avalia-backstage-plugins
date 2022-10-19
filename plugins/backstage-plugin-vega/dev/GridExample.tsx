import { makeStyles } from '@material-ui/core';
import React from 'react';
import { VegaWidget } from '../src';
import { VegaLibrary } from '../src/components/types';

const useStyles = makeStyles(() => ({
  grid: {
    flexDirection: "column",
    display: "flex",
    width: "100%",
    height: "100vh",
    maxWidth: "100%",
  },
  row: {
    flexDirection: "row",
    display: "flex",
    width: "100%",
    height: "100%",
    minWidth: "0px",
    minHeight: "0px",
  },
  cell: {
    display: "flex",
    width: "100%",
    height: "100%",
    minWidth: "0px",
    minHeight: "0px",
    padding: "0.5rem",
  },
}));

export const GridExample = () => {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      <div className={classes.row}>
        <div className={classes.cell}>
          <VegaWidget specUrl="/monthly-commits-line.json" library={VegaLibrary.VEGA} />
        </div>
        <div className={classes.cell}>
          <VegaWidget specUrl="/monthly-commits-line.json" library={VegaLibrary.VEGA} />
        </div>
        <div className={classes.cell}>
          <VegaWidget specUrl="/monthly-commits-line.json" library={VegaLibrary.VEGA} />
        </div>
      </div>
      <div className={classes.row}>
      <div className={classes.cell}>
        <VegaWidget specUrl="/monthly-commits-line.json" library={VegaLibrary.VEGA} />
      </div>
      <div className={classes.cell}>
        <VegaWidget specUrl="/monthly-commits-line.json" library={VegaLibrary.VEGA} />
      </div>
    </div>
  </div>
)
}