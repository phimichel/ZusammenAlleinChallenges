import { Button } from '@material-ui/core';
import React from 'react';
import { useParams } from "react-router-dom";
import items from '../items.json';
import { PlayCardPictureService } from '../services/play-card-picture-service';
import { PlayCard } from './PlayCard';
import { SimpleTable } from './SimpleTable';

import './DetailView.scss'

export default function DetailView() {
  let { id } = useParams();
  const selected = getSelection(id)

  const createPicture = () => {
    PlayCardPictureService.downloadPicture()
  }

  function getSelection(id) {
    /* truncate first the numbers */
    var indexes = new Buffer(id, 'base64').toString('ascii').split(",", 25)
    /* filter items */
    const elems = indexes.map(i => items[i])
    return elems
  }

  return (
    <div className="root">
      <div className="rules">
        <h2>Regeln:</h2>
        <ul>
          <li>In welcher Reihenfolge du die Challenges erledigst ist dir überlassen</li>
          <li>Jede Challenge wird genau einmal gewertet, du warst sie aber natürlich so oft du willst absolvieren</li>
          <li>Pro Tag darfst du eine Challenge einreichen</li>
          <li>Als Challengebeweis postest du ein Foto, Video oder Screenshot (z.b. absolvierte Strecke in Running App). Wenn du bescheißt, dann nur dich selbst.</li>
          <li>Hast du eine Challenge absolviert, kannst du sie wegstreichen, du selbst behältst den Überblick.</li>
          <li>Wenn du alle Challenges geschafft hast, beweis es mit einer Fotocollage und freu dich - Du hast dich Fit gehalten!</li>
        </ul>
      </div>
      <PlayCard items={selected.map(item => item.Challenge)} />
      <SimpleTable items={selected} />

      <div className="buttonBar">
        <Button variant="contained" onClick={createPicture}>Karte exportieren</Button>
      </div>
    </div>
  );
}