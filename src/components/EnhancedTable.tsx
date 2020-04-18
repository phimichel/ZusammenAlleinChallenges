import { Button, TextField, Typography, Card, Link } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Autocomplete from '@material-ui/lab/Autocomplete'
import React, { SyntheticEvent, useEffect } from 'react';
import { EnhancedTableHead } from './EnhancedTableHead';
import { PlayCard } from './PlayCard';
import { PlayCardPictureService } from '../services/play-card-picture-service';
import { useHistory } from "react-router-dom";
import { ItemService, ChallangeItem } from '../services/item-service';
import { Tag } from './Tag';
import { AutocompleteService, createLevelTag, TagOption, createZielTag, createTrainingTag, createOrtTag, createTeilnehmerTag, createAltergruppeTag, createTagsTag } from '../services/autocomplete-service';
import copy from 'copy-to-clipboard'

const rows = ItemService.getAll()
const autoCompleteOptions = AutocompleteService.createAutocompleteOptions()

function descendingComparator(a: any, b: any, orderBy: string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: 'asc' | 'desc', orderBy: string) {
  return order === 'desc'
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: any[], comparator: (a: any, b: any) => number) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    padding: '0',
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

export default function EnhancedTable() {
  const classes = useStyles();
  const [selectedTags, setSelectedTags] = React.useState([] as string[])
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([] as string[]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [copyLink, setCopyLink] = React.useState('');
  const [absoluteCopyLink, setAbsoluteCopyLink] = React.useState('');
  const [whatsappLink, setWhatsappLink] = React.useState('');

  const history = useHistory();

  const createWhatsAppLink = (): string => {
    const text = "Hier ist deine neue Bingokarte: "
    const link = "whatsapp://send?text=" + encodeURIComponent(text + absoluteCopyLink)
    console.log('whatsapp link', link)

    return link
  }
  const createAbsoluteLink = (): string => {
    const currentLoc = window.location.href;
    const basePath = currentLoc.slice(0, currentLoc.length - 1)

    console.log(basePath, copyLink)
    return basePath + copyLink;
  }
  const createLink = (): string => {
    return '/view/' + new Buffer(selected.map((i, idx) => rows.findIndex(it => it.Challange === i)).join(',')).toString('base64')
  }
  const navigateToLink = () => {
    history.push(createLink())
  }

  useEffect(() => {
    setCopyLink(createLink())
  }, [selected])

  useEffect(() => {
    setAbsoluteCopyLink(createAbsoluteLink())
  }, [copyLink])

  useEffect(() => {
    setWhatsappLink(createWhatsAppLink())
  }, [absoluteCopyLink])


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.Challange);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [] as string[];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    if (newSelected.length > 16) {
      return
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const createPicture = () => {
    PlayCardPictureService.downloadPicture()
  }

  const addTag = (tag: TagOption, ev: SyntheticEvent) => {
    ev.stopPropagation()
    setSelectedTags([...selectedTags, tag.label])
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const copyToClipboard = e => {
    copy(absoluteCopyLink);
  }

  const tagsToFilterBy = autoCompleteOptions.filter(option => selectedTags.includes(option.label))

  return (
    <div className={classes.root}>
      <Typography variant="h2">
        Challenge-Card
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
      <Card>
        <PlayCard items={selected} />
          <Button variant="contained" onClick={copyToClipboard} className="map-btn">Kopiere Link</Button>
          <Button variant="contained" onClick={navigateToLink} className="map-btn">Gehe zu Seite</Button>
          <Button variant="contained" className="button-whatsapp map-btn"><a href={whatsappLink}>In Whatsapp teilen</a></Button>
          <Button variant="contained" onClick={createPicture} className="map-btn">Karte als Bild runterladen</Button>
      </Card>
      <Typography variant="h2">
        Challenges
      </Typography>
      <form style={{ display: 'inline-block', marginLeft: '40px' }} noValidate autoComplete="off" onSubmit={console.log}>
        <Autocomplete 
          multiple
          value={selectedTags}
          onChange={(ev, val) => setSelectedTags(val)}
          autoSelect={true}
          options={autoCompleteOptions.map(el => el.label)}
          renderInput={params => (
            <TextField style={{ width: '500px'}} variant="outlined" label="Suche" {...params} />
          )} />
      </form>
      <Card>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order as any, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .filter((row: ChallangeItem, index) => {
                    if (tagsToFilterBy.length === 0) {
                      return true
                    }
  
                    return tagsToFilterBy.every(tag => {
                      const rowValue = row[tag.field]
                      if (Array.isArray(rowValue)) {
                        return rowValue.some(val => val === tag.value)
                      } else {
                        return row[tag.field] === tag.value
                      }
                    })
                  })   
                  .map((row: ChallangeItem, index: number) => {
                    const isItemSelected = isSelected(row.Challange);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.Challange)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.Challange}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            disabled={selected.length === 16 && !isItemSelected}
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none" style={{width: '100% !important'}}>
                          {row.Challange}
                        </TableCell>
                        <TableCell align="left">
                          <span>
                            {row.Beschreibung.text}
                          </span>
                          <br/>
                          {!!row.Beschreibung.link ? 
                            (<span><strong>Link: </strong><Link href={row.Beschreibung.link}>{row.Beschreibung.link}</Link></span>)
                            : null
                          }
                        </TableCell>
                        <TableCell align="left">
                          <Tag onClick={(ev) => addTag(createLevelTag(row.Level), ev)}>{createLevelTag(row.Level).label}</Tag>
                        </TableCell>
                        <TableCell align="left">
                          {row.Ziel.map((el, i) => <Tag onClick={(ev) => addTag(createZielTag(el), ev)} key={i}>{createZielTag(el).label}</Tag>)}
                        </TableCell>
                        <TableCell align="left">
                          {row.Training.map((el, i) => <Tag onClick={(ev) => addTag(createTrainingTag(el), ev)} key={i}>{el}</Tag>)}
                        </TableCell>
                        <TableCell align="left">
                          {row.Teilnehmer.map((el, i) => <Tag onClick={(ev) => addTag(createTeilnehmerTag(el), ev)} key={i}>{el}</Tag>)}
                        </TableCell>
                        <TableCell align="left">
                          {row.Ort.map((el, i) => <Tag onClick={(ev) => addTag(createOrtTag(el), ev)} key={i}>{el}</Tag>)}
                        </TableCell>
                        <TableCell align="left">
                          <Tag onClick={(ev) => addTag(createAltergruppeTag(row.Altersgruppe), ev)}>{createAltergruppeTag(row.Altersgruppe).label}</Tag>
                        </TableCell>
                        <TableCell align="left">
                          {row.Tags.map((el, i) => <Tag onClick={(ev) => addTag(createTagsTag(el), ev)} key={i}>{el}</Tag>)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[25, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
      </Card>
    </div>
  );
}