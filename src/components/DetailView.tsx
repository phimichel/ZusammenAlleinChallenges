import { Button, Typography, Card } from '@material-ui/core';
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
      <Typography variant="h2">
        Willkommen bei deiner<br/>ZusammenAlleinImVerein-Challenge
      </Typography>
      <Typography variant="subtitle1">
        <div id="intro">
          <h4>Du bist Trainer/in und m&ouml;chtest dein Sportteam weiter fit halten?</h4> 
          <h4>Du bist Vereinsmitglied und vermisst deine Sportskollegen und -kolleginnen?</h4>
          <p>
          Wenn du Cybertraining ausprobieren m&ouml;chtest haben wir <a href="https://lutzkohl.github.io/Cybertraining/" target="blank">hier</a> alle Infos für dich. Weiterhin haben wir unten Challenges zusammengestellt, damit ihr euch trotz Social Distancing physisch und mental fit halten und miteinander in Kontakt treten k&ouml;nnt.
          Lasst euer Vereinsleben wieder aufblühen und bleibt aktiv. Also auf geht's runter von der Couch und ran an die Challenges!<br/><br/>
          Erstelle dir deine individuelle ZusammenAlleinImVerein Bingo Card mit 16 Challenges zusammen. W&auml;hle dazu einfach Challenges an und die Seite generiert speziell für dich und dein Team eine Bingo Cards. Du kannst auch nach deinen W&uuml;nschen Filterungen der Challenges &uuml;ber die Suchfunktion vornehmen. Viel Spaß dabei!<br/>
          Wir freuen uns &uuml;ber eure Videos und Bilder zu den Challenges mit dem Hashtag #ZusammenAlleinImVerein.<br/><br/>
          Du hast Anregungen f&uuml;r weitere Challenges, die in der Liste fehlen? Schick sie an folgende E-Mailadresse: <a href="mailto:zusammenalleinchallenge@gmail.com">zusammenalleinchallenge@gmail.com</a>.
          </p>
        </div>
      </Typography>
      <Card className="half">
        <Typography variant="h3">
          Challenge-Card
        </Typography>
        <PlayCard items={selected.map(item => item.Challenge)} />
      </Card>
      <Card className="half">
      <div className="rules">
        <Typography variant="h3">
          Allgemeine Regeln
        </Typography>
        <ol className="rules">
          <li>In welcher Reihenfolge du die Challenges erledigst ist dir überlassen</li>
          <li>Jede Challenge wird genau einmal gewertet, du warst sie aber natürlich so oft du willst absolvieren</li>
          <li>Pro Tag darfst du eine Challenge einreichen</li>
          <li>Als Challengebeweis postest du ein Foto, Video oder Screenshot (z.b. absolvierte Strecke in Running App). Wenn du bescheißt, dann nur dich selbst.</li>
          <li>Hast du eine Challenge absolviert, kannst du sie wegstreichen, du selbst behältst den Überblick.</li>
          <li>Wenn du alle Challenges geschafft hast, beweis es mit einer Fotocollage und freu dich - Du hast dich Fit gehalten!</li>
        </ol>
      </div>
      </Card>
      <Card>
        <Typography variant="h3">
            Challenges
        </Typography>
        <SimpleTable items={selected} />
      </Card>
    </div>
  );
}