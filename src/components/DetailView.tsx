import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useParams } from "react-router-dom";
import items from '../items.json';
import { PlayCardPictureService } from '../services/play-card-picture-service';
import { PlayCard } from './PlayCard';
import { SimpleTable } from './SimpleTable';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function DetailView() {
  const classes = useStyles();

  let { id } = useParams();
  const selected = getSelection(id)

  const createPicture = () => {
    PlayCardPictureService.downloadPicture()
  }

  function getSelection(id) {
    console.log(id)
    /* truncate first the numbers */
    var indexes = id.split(",", 25)
    console.log('[getSelection] indexes:', indexes)
    /* filter items */
    const elems = indexes.map(i => items[i].Challenge)
    console.log('[getSelection] elements:', elems)
    return elems
  }
  
  return (
    <div className={classes.root}>
      <PlayCard items={selected} />
      <SimpleTable items={selected} />
      
      <Button variant="contained" onClick={createPicture}>Karte exportieren</Button>
    </div>
  );
}