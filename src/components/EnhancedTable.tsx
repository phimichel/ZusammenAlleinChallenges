import { Button, TextField } from '@material-ui/core';
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
import React, { SyntheticEvent } from 'react';
import { EnhancedTableHead } from './EnhancedTableHead';
import { PlayCard } from './PlayCard';
import { PlayCardPictureService } from '../services/play-card-picture-service';
import { useHistory } from "react-router-dom";
import { ItemService, ChallangeItem } from '../services/item-service';
import { Tag } from './Tag';
import { AutocompleteService, createLevelTag, TagOption, createZielTag, createTrainingTag, createOrtTag, createTeilnehmerTag, createAltergruppeTag } from '../services/autocomplete-service';

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
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([] as string[]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);
  const history = useHistory();

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
  
  const createLink = () => {     
    history.push('/view/' + new Buffer(selected.map((i,idx) => rows.findIndex(it => it.Challange === i)).join(',')).toString('base64')  )
  }

  const addTag = (tag: TagOption, ev: SyntheticEvent) => {
    ev.stopPropagation()
    console.log(tag)
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <PlayCard items={selected} />
      <Paper className={classes.paper}>
        <form style={{ display: 'inline-block' }} noValidate autoComplete="off" onSubmit={console.log}>
          <Autocomplete 
            multiple
            autoSelect={true}
            options={autoCompleteOptions.map(el => el.label)}
            renderInput={params => (
              <TextField style={{ width: '500px'}} variant="outlined" label="Suche" {...params} />
            )} />
        </form>
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
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.Challange}
                      </TableCell>
                      <TableCell align="right">
                        <span>
                          {row.Beschreibung.text}
                        </span>
                        <br/>
                        {!!row.Beschreibung.link ? 
                          (<span><strong>Link: </strong><a href={row.Beschreibung.link}>{row.Beschreibung.link}</a></span>)
                          : null
                        }
                      </TableCell>
                      <TableCell align="right">
                        <Tag onClick={(ev) => addTag(createLevelTag(row.Level), ev)}>{createLevelTag(row.Level).label}</Tag>
                      </TableCell>
                      <TableCell align="right">
                        {row.Ziel.map((el, i) => <Tag onClick={(ev) => addTag(createZielTag(el), ev)} key={i}>{createZielTag(el).label}</Tag>)}
                      </TableCell>
                      <TableCell align="right">
                        {row.Training.map((el, i) => <Tag onClick={(ev) => addTag(createTrainingTag(el), ev)} key={i}>{el}</Tag>)}
                      </TableCell>
                      <TableCell align="right">
                        {row.Teilnehmer.map((el, i) => <Tag onClick={(ev) => addTag(createTeilnehmerTag(el), ev)} key={i}>{el}</Tag>)}
                      </TableCell>
                      <TableCell align="right">
                        {row.Ort.map((el, i) => <Tag onClick={(ev) => addTag(createOrtTag(el), ev)} key={i}>{el}</Tag>)}
                      </TableCell>
                      <TableCell align="right">
                        <Tag onClick={(ev) => addTag(createAltergruppeTag(row.Altersgruppe), ev)}>{createAltergruppeTag(row.Altersgruppe).label}</Tag>
                      </TableCell>
                      <TableCell align="right">
                        {row.Tags.map((el, i) => <Tag key={i}>{el}</Tag>)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      <Button variant="contained" onClick={createLink}>Gehe zu Link</Button>
      <Button variant="contained" onClick={createPicture}>Karte exportieren</Button>
    </div>
  );
}