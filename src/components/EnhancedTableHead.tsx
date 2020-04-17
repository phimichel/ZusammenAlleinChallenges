import React from "react";
import { TableHead, TableRow, TableCell, Checkbox, TableSortLabel } from "@material-ui/core";
import PropTypes from 'prop-types';

const headCells = [
  { id: 'Challenge', numeric: false, disablePadding: true, label: 'Challenge' },
  { id: 'Beschreibung', numeric: true, disablePadding: false, label: 'Beschreibung' },
  { id: 'Level', numeric: true, disablePadding: false, label: 'Level' },
  { id: 'Ziel', numeric: true, disablePadding: false, label: 'Ziel' },
  { id: 'Training', numeric: true, disablePadding: false, label: 'Training' },
  { id: 'Teilnehmer', numeric: true, disablePadding: false, label: 'Teilnehmer' },
  { id: 'Ort', numeric: true, disablePadding: false, label: 'Ort' },
  { id: 'Altersgruppe', numeric: true, disablePadding: false, label: 'Alterstufe' },
  { id: 'Tags', numeric: true, disablePadding: false, label: 'Tags' },
];

export function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};